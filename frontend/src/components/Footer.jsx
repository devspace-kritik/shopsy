import { assets } from '@/assets/assets'
import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div>
        <div className="footerContainer">
            <div>
                <img src={assets.logo} className='footerLogo' alt="" />
                <p className='footerCol1Text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div>
                <p className='footerCompanyText'>COMPANY</p>
                <ul className='companyList'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div>
                <p className='footerCol3Heading'>GET IN TOUCH</p>
                <ul className='companyList'>
                    <li>+1-212-456-7890</li>
                    <li>shopsy@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='copyrightText'>Copyright 2025@ shopsy.com - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer