import { ShopContext } from '@/context/ShopContext';
import React, { useContext, useEffect, useState } from 'react';
import "./bestsellerProduct.css";
import Title from './Title';
import ProductItem from './ProductItem';

const Bestseller = () => {

    const {products} = useContext(ShopContext);
    const [bestseller, setBestseller] = useState([]);

    useEffect(()=>{
        const bestProduct = products.filter((item) => (item.bestseller));
        /* eslint-disable-next-line react-hooks/exhaustive-deps */
        setBestseller(bestProduct.slice(0,5));
    },[])
  return (
    <div className='bestsellerContainer'>
        <div className='bestsellerChild'>
            <Title text1={"BEST"} text2={"SELLERS"}/>
            <p className='bestsellerHeading'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
            </p>
        </div>

        <div className="bestsellerList">
            {
                bestseller.map((item, index)=>(
                    <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
                ))
            }
        </div>
    </div>
  )
}

export default Bestseller