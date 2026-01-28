import React, { useState } from 'react'
import "./Navbar.css"
import { assets } from '@/assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

  const [visible, setVisible] = useState(false);

  return (
    <div className='navbarContainer'>
        <img src={assets.logo} className='navbarLogo' alt="Logo" />
        <ul className='menuList'>
          <NavLink to={'/'} className={'navLink'}>
              <p>HOME</p>
              <hr className='itemTabLine'/>
          </NavLink>
          <NavLink to={'/collection'} className={'navLink'}>
              <p>COLLECTION</p>
              <hr className='itemTabLine'/>
          </NavLink>
          <NavLink to={'/about'} className={'navLink'}>
              <p>ABOUT</p>
              <hr className='itemTabLine'/>
          </NavLink>
          <NavLink to={'/contact'} className={'navLink'}>
              <p>CONTACT</p>
              <hr className='itemTabLine'/>
          </NavLink>
        </ul>

        <div className='rightItemsContainer'>
          <img src={assets.search_icon} className='searchIcon' alt="Search" />
          <div className="profileContainer">
            <img src={assets.profile_icon} className='profileIcon' alt="Profile" />
            <div className='profileDropdownContainer'>
              <div className="dropdownChild">
                <p className='dropdownText'>My Profile</p>
                <p className='dropdownText'>Orders</p>
                <p className='dropdownText'>Logout</p>
              </div>
            </div>
          </div>
          <Link to={"/"} className='cartContainer'>
              <img src={assets.cart_icon} className='cartIcon' alt="Cart" />
              <p className='cartItemCount'>10</p>
          </Link>
          <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='menuIcon' alt="Menu Icon" />
        </div>
        {/* Sidebar menu for small screen */}
        <div className={`smallScreenSidebarMenu ${visible ? 'open': ''}`}>
            <div className="closeIconContainer">
              <div onClick={()=>setVisible(false)} className="closeIconChild">
                <img src={assets.dropdown_icon} className='closeIcon' alt="Close Icon" />
                <p>Back</p>
              </div>
              <NavLink onClick={()=>setVisible(false)} to={"/"} className={'smallScreenMenuItems'}>HOME</NavLink>
              <NavLink onClick={()=>setVisible(false)} to={"/collection"} className={'smallScreenMenuItems'}>COLLECTION</NavLink>
              <NavLink onClick={()=>setVisible(false)} to={"/about"} className={'smallScreenMenuItems'}>ABOUT</NavLink>
              <NavLink onClick={()=>setVisible(false)} to={"/contact"} className={'smallScreenMenuItems'}>CONTACT</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar