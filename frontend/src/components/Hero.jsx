import React from 'react'
import "./hero.css"
import { assets } from '@/assets/assets'

const Hero = () => {
  return (
    <div className='heroContainer'>
        {/* Hero left side */}
        <div className="heroLeftCol">
            <div className="heroChildContainer">
                <div className="heroText1">
                    <p className='heroLinePara'></p>
                    <p className='bestsellersText'>OUR BESTSELLERS</p>
                </div>
                <h1 className='heroLeftHeadingText prata-regular'>Latest Arrivals</h1>
                <div className="heroText2">
                    <p className='shopNowText'>SHOP NOW</p>
                    <p className='heroLinePara'></p>
                </div>
            </div>
        </div>
        {/* Hero right side */}
        <img src={assets.hero_img} className='heroImage' alt="hero image" />
    </div>
  )
}

export default Hero