import { ShopContext } from '@/context/ShopContext';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./product.css";

const Product = () => {
  const {productId} = useParams();
const {products} = useContext(ShopContext);
const [productData, setProductData] = useState(false);
const [image, setImage] = useState('');

const fetchProductData = async () => {
  products.map((item)=>{
    if(item._id===productId){
      setProductData(item);
      setImage(item.image[0]);
      console.log(item);
      return null;
    }
  })
}

useEffect(()=>{
  fetchProductData();
},[productId, products]);

  return productData ? (
    <div className='productDetailContainer'>
      {/* Product data */}
      <div className="pdChildContainer">
        {/* Product images */}
        <div className='productImageParent'>
            <div className="productImageChild"></div>
        </div>
      </div>
    </div>
  ) : <div className='productSecondParent'></div>
}

export default Product