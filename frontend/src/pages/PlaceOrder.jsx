import Title from '@/components/Title'
import React, { useContext } from 'react'
import './placeOrder.css'
import CartTotal from '@/components/CartTotal'
import { assets } from '@/assets/assets'
import { useState } from 'react'
import { ShopContext } from '@/context/ShopContext'

const PlaceOrder = () => {

const [method, setMethod] = useState('cod');
const {navigate} = useContext(ShopContext);

  return (
    <div className='placeOrderContainer'>
      <div className="placeOrderLeftChild">
        <div className='leftHeading'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
        <div className="poInputContainer">
          <input className='poInputStyle' type="text" placeholder='First name' />
          <input className='poInputStyle' type="text" placeholder='Last name' />
        </div>
         <input className='poInputStyle' type="email" placeholder='Email address' />
         <input className='poInputStyle' type="text" placeholder='Street' />
         <div className="poInputContainer">
          <input className='poInputStyle' type="text" placeholder='City' />
          <input className='poInputStyle' type="text" placeholder='State' />
        </div>
         <div className="poInputContainer">
          <input className='poInputStyle' type="number" placeholder='Zipcode' />
          <input className='poInputStyle' type="text" placeholder='Country' />
        </div>
        <input className='poInputStyle' type="number" placeholder='Phone' />
      </div>

      {/* Right side */}
      <div className="poRightChild">
        <div className="poRightCart">
          <CartTotal/>
        </div>
        <div className="paymentContainer">
          <Title text1={'PAYMENT'} text2={"METHOD"}/>
          
          {/* payment method selection */}
          <div className="poPaymentCardContainer">
            <div onClick={()=>setMethod('stripe')} className="poPaymentCard">
              <p className={`poPaymentCheckbox ${method=== 'stripe' ? 'greenColor' : ''}`}>
              </p>
              <img className='poPaymentStripeLogo' src={assets.stripe_logo} alt="" />
            </div>
            <div onClick={()=>setMethod('razorpay')} className="poPaymentCard">
              <p className={`poPaymentCheckbox ${method=== 'razorpay' ? 'greenColor' : ''}`}>
              </p>
              <img className='poPaymentStripeLogo' src={assets.razorpay_logo} alt="" />
            </div>
            <div onClick={()=>setMethod('cod')} className="poPaymentCard">
              <p className={`poPaymentCheckbox ${method=== 'cod' ? 'greenColor' : ''}`}>
              </p>
              <p className='codText'>CASH ON DELIVERY</p>
            </div>
          </div>
          <div className='paymentPlaceOrderButtonParent'>
            <button onClick={()=>navigate('/orders')} className='paymentPlaceOrderButton'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder