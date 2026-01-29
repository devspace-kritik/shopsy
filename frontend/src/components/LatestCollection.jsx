import { ShopContext } from '@/context/ShopContext'
import React, { useContext, useEffect, useState } from 'react'
import "./latestCollection.css"
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const {products} = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(()=>{
      /* eslint-disable-next-line react-hooks/exhaustive-deps */
      setLatestProducts(products.slice(0,10));
    },[])

  return (
    <div className='latestCollectionContainer'>
      <div className="lcChildContainer">
        <Title text1={"LATEST"} text2={"COLLECTIONS"}/>
        <p className='lcHeading'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
      </div>

    {/* Rendering products */}
    <div className="productListContainer">
      {
        latestProducts.map((item,index)=>(
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
        ))
      }
    </div>
    </div>
  )
}

export default LatestCollection