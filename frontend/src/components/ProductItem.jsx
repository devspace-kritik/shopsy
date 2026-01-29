import { ShopContext } from '@/context/ShopContext'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import "./productItem.css";

const ProductItem = ({id, image, name, price}) => {

    const {currency} = useContext(ShopContext);

  return (
    <Link className='productItemStyle' to={`/product/${id}`}>
        <div className="productCard">
            <img className='productImage' src={image[0]} alt="Product Image" />
        </div>
        <p className='productName'>{name}</p>
        <p className='productPrice'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem