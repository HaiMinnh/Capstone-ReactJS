import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../sass/index.scss';

const ProductList = () => {
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
  };

  return (
    <div className='product container'>
      <h1 className='w-50'>Product Feature</h1>
      <div style={{ paddingBottom: 30 }} className='body'>
        <div className='row text-center' style={{ marginLeft: 80 }}>
          {arrProduct.map((product, index) => (
            <div className='col-4 pe-0 mt-5' key={index}>
              <i className='fa fa-heart'></i>
              <div className='img py-2' style={{ background: '#f8f8f8' }}>
                <img src={product.image} alt={product.name} width={250} />
                <div className='text-start ms-3 pb-2'>
                  <h3>{product.name}</h3>
                  <p className='d-inline'>{product.shortDescription}</p>
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
                  ${product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList
