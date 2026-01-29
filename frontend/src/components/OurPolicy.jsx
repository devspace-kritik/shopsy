import { assets } from '@/assets/assets'
import React from 'react'
import "./ourPolicy.css"

const OurPolicy = () => {
  return (
    <div className='policyContainer'>
        <div>
            <img src={assets.exchange_icon} className='exchangeImage' alt="" />
            <p className='exchangeText'>Easy Exchange Policy</p>
            <p className='exchnagePara'>We offer hassle free exchange policy</p>
        </div>
        <div>
            <img src={assets.quality_icon} className='exchangeImage' alt="" />
            <p className='exchangeText'>7 Days Return Policy</p>
            <p className='exchnagePara'>We provide 7 days free return policy</p>
        </div>
        <div>
            <img src={assets.support_img} className='exchangeImage' alt="" />
            <p className='exchangeText'>Best customer support</p>
            <p className='exchnagePara'>we provide 24/7 customer support</p>
        </div>
    </div>
  )
}

export default OurPolicy