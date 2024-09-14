import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RealateProduct = () => {
  const [arrProduct, setArrProduct] = useState([]);
  const navigate = useNavigate();

  const getAllProductApi = async () => {
    try {
      const res = await axios.get('https://shop.cyberlearn.vn/api/Product');
      setArrProduct(res.data.content);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    getAllProductApi();
  }, []);

  const handleBuyNow = (productId) => {
    navigate(`/detail/${productId}`);
    window.location.reload();
  };

  const productsToShow = arrProduct.slice(0, 6);

  return (
    <div className='realate container mt-4'>
      <h1 className='text-center'>-Realate Product -</h1>
      <div className='body'>
        <div className='row text-center'>
          {productsToShow.map((product) => (
            <div className='col-4 pe-0 mt-5' key={product.id}>
              <i className='fa fa-heart'></i>
              <div className='img py-2' style={{ background: '#f8f8f8' }}>
                <img src={product.image || '../../public/img/Shoes.png'} alt={product.name} width={250} />
                <div className='text-start pb-2 ms-4'>
                  <h3>{product.name || 'Adidas Prophere'}</h3>
                  <p className='d-inline'>{product.shortDescription || 'short descript ...'}</p>
                </div>
              </div>
              <div className='price d-flex'>
                <button
                  className='buy w-50 border-0 px-2 py-3'
                  style={{ background: '#9DE167', fontWeight: 400 }}
                  onClick={() => handleBuyNow(product.id)}
                >
                  Buy now
                </button>
                <span
                  className='w-50 pt-3'
                  style={{ background: '#dedddc', fontWeight: 600 }}
                >
                  ${product.price || '85$'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealateProduct
