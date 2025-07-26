import React, { useContext }  from 'react';
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaUser, FaShoppingBag, FaHeart, FaSearch } from "react-icons/fa";
import {Link, NavLink}from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import SearchBar from './SearchBar';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

const Navi = () => {

      const [visible,setVisible] = useState(false);
      const location = useLocation();
      const isHome = location.pathname === '/';
      const {setShowSearch , getCartCount} = useContext(ShopContext);

      const handleSearchClick = () => {
    const path = location.pathname.toLowerCase();
    if (path.includes('products') || path.includes('newrelese')) {
      setShowSearch(true);
    }
  };

  return (
    <div className="w-full">
      {/* Top bar */}
      <div className="bg-[#362f84] text-white flex justify-between items-center px-4 py-1 text-sm">
        <div className="flex items-center gap-3">
        <a href="tel:+94412250830">   
          <FaPhoneAlt />
          <span>+94412250830</span>
        </a>
      </div>
        <div className="flex items-center gap-4">
        <a href="https://facebook.com" target="_blank"><FaFacebookF /></a>
        <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
        <a href="https://linkedin.com" target="_blank"><FaLinkedinIn /></a>
          
 </div>
      </div>

      {/* Main navigation */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 py-4">
        {/* Logo and name */}
        <div className="flex items-center gap-4">
          <div>
            <Link to='/'><img src={assets.logo} alt="logo" className="w-36 h-36 object-cover mb-4 rounded mx-auto"/></Link>
          </div>
          <div className="text-xl font-bold leading-tight text-blue">
            <div>AKURA</div>
            <div>BOOK SHOP</div>
          </div>
        </div>

      
        

        {/* Right side icons */}
        <div className="flex items-center gap-6 text-[#362f84] text-sm font-semibold">

           {/* SearchIcon */}
          <div className="flex items-center gap-6 ">
            <img onClick={handleSearchClick} src={assets.search_icon} className="w-5 cursor-pointer" alt="search"  />
          </div>
              <div className="border-l h-6 border-gray-400 mx-2"></div>

          {/* Account */}
          <div className="group relative">
            <Link to='/login'><img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" /></Link>
              {isHome && <span className="text-xs text-blue-900">ACCOUNT</span>}
            <div className="absolute right-0 hidden group-hover:block pt-2 z-10">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-lg">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
            
            
            </div>
          

          <div className="border-l h-6 border-gray-400 mx-2"></div>

          {/* Cart */}
          <div className="flex items-center gap-1 cursor-pointer">
            <div className="relative">
              <FaShoppingBag className="text-blue text-lg" />
              <Link to="/cart">
                <p className="absolute -right-1 -bottom-1 w-4 h-4 text-[10px] flex items-center justify-center bg-black text-white rounded-full">
                  {getCartCount()}
                </p>
              </Link>
            </div>
            {isHome && <span>CART</span>}
          </div>

          </div>

          
      </div>

          {/*Sidebar menu for small screens*/}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`} >
              <div className='flex flex-col text-gray-600'>
                <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <FaChevronLeft className="h-4" />
            <p>Back</p>
               </div >
          
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border'to='/about'>ABOUT</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/products'>PRODUCTS</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/newRelese'>NEW Arrival</NavLink>
           </div>
          </div>

          {/* Horizontal divider below the full row */}
          <hr className="mt-4 border-t border-gray-300 shadow-sm" />

    <div className="flex justify-center items-center space-x-6 py-2">
            <NavLink to="/" className={({ isActive }) =>
             `${isActive ? 'text-red-600 font-bold' : 'text-black'} tracking-wide`}>
            HOME
            </NavLink>
            <div className="w-px h-6 bg-gray-300" />

              <NavLink
               to="/about"
               className={({ isActive }) =>
              `${isActive ? 'text-red-600 font-bold' : 'text-black'} tracking-wide`
                } >
              ABOUT US
              </NavLink>
              <div className="w-px h-6 bg-gray-300" />

              <NavLink
               to="/products"
               className={({ isActive }) =>
               `${isActive ? 'text-red-600 font-bold' : 'text-black'} tracking-wide`
                }>
               PRODUCTS
               </NavLink>
               <div className="w-px h-6 bg-gray-300" />

               <NavLink
               to="/newRelese"
               className={({ isActive }) =>
              `${isActive ? 'text-red-600 font-bold' : 'text-black'} tracking-wide`
               } >
               NEW RELEASE
              </NavLink>
              <div className="w-px h-6 bg-gray-300" />

            <div className="md:hidden">
              <FaBars 
                className="w-6 h-6 text-black cursor-pointer" 
                 onClick={() => setVisible(true)} 
              />
            </div>
            
   </div>

  </div>
          

            
        
  
  );
}
      


export default Navi
