import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import RealateProduct from './RealateProduct';

const Detail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null); // Khởi tạo trạng thái cho sản phẩm

  // Hàm gọi API để lấy thông tin sản phẩm
  const getProductDetails = async () => {
    try {
      const res = await axios.get(`https://shop.cyberlearn.vn/api/Product/getbyid?id=${productId}`);
      setProduct(res.data.content); // Cập nhật trạng thái với dữ liệu sản phẩm
    } catch (error) {
      console.error('Failed to fetch product details:', error);
    }
  };

  useEffect(() => {
    getProductDetails(); // Gọi hàm khi component được render
  }, [productId]);

  if (!product) return <div>Loading...</div>; // Hiển thị khi dữ liệu đang được tải

  return (
    <>
      <div className='detail container'>
        <div className='row w-100 ms-5 mt-5'>
          <div className='col-4 text-center' style={{ background: '#f8f8f8' }}>
            <img src={product.image} alt={product.name} className='pt-5' width={250} />
          </div>
          <div className='col-8 w-50 ms-5 ps-5'>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <h3 style={{ color: '#2bdb1c' }} className='mb-4'>Available size</h3>
            <div className='menu'>
              {product.sizes && product.sizes.map((size, index) => (
                <span key={index} className='p-2' style={{ background: '#cccccc' }}>{size}</span>
              ))}
            </div>
            <h3 className='my-3 text-danger fw-bold'>{product.price}$</h3>
            <div className='group-button'>
              <button className='px-3 py-1 border-0 text-white' style={{ background: '#6c8af5' }}>+</button>
              <span className='px-3'>1</span>
              <button className='px-3 py-1 border-0 text-white' style={{ background: '#6c8af5' }}>-</button>
            </div>
            <button className='btn-end p-2 border-0 mt-2 px-3'>Add to cart</button>
          </div>
        </div>
      </div>
      <RealateProduct />
    </>
  );
};

export default Detail;
