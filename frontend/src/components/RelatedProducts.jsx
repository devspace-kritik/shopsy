import { ShopContext } from '@/context/ShopContext'
import React, { useContext, useEffect, useState } from 'react'
import Title from './Title';
import "./relatedProduct.css"
import ProductItem from './ProductItem';

const RelatedProducts = ({category, subCategory}) => {

    const {products} = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(()=>{
        if(products.length>0){
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item)=> category===item.category);
            productsCopy = productsCopy.filter((item)=> subCategory===item.subCategory);
           setRelated(productsCopy.slice(0,5));
        }
    }, [products])
  return (
    <div className='relatedProductContainer'>
        <div className="rpHeader">
            <Title text1={'RELATED'} text2={'PRODUCTS'}/>
        </div>
        <div className="rpGrid">
            {
                related.map((item, index)=>(
                    <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
                ))
            }
        </div>
    </div>
  )
}

export default RelatedProducts