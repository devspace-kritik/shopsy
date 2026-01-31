import Title from '@/components/Title';
import { ShopContext } from '@/context/ShopContext'
import React, { useContext } from 'react'
import './orders.css'

const Orders = () => {

const {products, currency} = useContext(ShopContext);

   
  return (
    <div className='ordersContainer'>
      <div className="ordersHeading">
        <Title text1={'MY'} text2={'ORDERS'}/>
      </div>
      <div>
        {
          products.slice(1,4).map((item, index)=>(
            <div className='orderProducts'>
              <div className="orderProductCard">
                <img className='orderImage' src={item.image[0]} alt="" />
                <div>
                  <p className='orderProductName'>{item.name}</p>
                  <div className='orderProductPriceContainer'>
                    <p className='opPrice'>{currency}{item.price}</p>
                    <p>Quantity: 1</p>
                    <p>Size: M</p>
                  </div>
                  <p className='opDateText'>Date: <span className='opDate'>25, Jul, 2024</span></p>
                </div>
              </div>
              <div className='opShipContainer'>
                <div className="readyToShipWrapper">
                <p className='opBullet'></p>
                <p className='opShipText'>Ready to ship</p>
                </div>
                <button className='trackOrderButton'>Track Order</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders