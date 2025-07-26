import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="mt-10 px-6 py-6 bg-[#BFEFFF] text-sm text-gray-700">
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
    
       {/* Contact + Follow Us */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div>
             <div className="mb-2 font-bold">Contact Us</div>
              <a href="tel:+94412250830"className="flex items-center gap-2 justify-center md:justify-start text-gray-700 hover:text-blue-600">
               <FaPhoneAlt /> +94412250830
              </a>
              <a href="mailto:info@akurabooks.com"className="flex items-center gap-2 justify-center md:justify-start text-gray-700 hover:text-blue-600">
                <FaEnvelope /> info@akurabooks.com
              </a>
            </div>

        {/* Follow Us - centered and under Contact Us */}
          <div className="mt-4 text-center md:text-left">
        

        {/* Optional paragraph */}
           <div className="mb-2 font-bold">Follow Us</div>

          <div className="flex gap-4 justify-center md:justify-start">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#3b5998]">
               <FaFacebookF />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#E1306C]">
               <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#1DA1F2]">
              <FaTwitter />
            </a>
          </div>
          </div>
          <div>
             <p className="text-base font-bold space-x-3">We Are Accepts</p>
             <img src={assets.pay} alt="Payment" className="w-30 h-30" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <div className="mb-2 font-bold space-x-2">Quick Links</div>
            <ul className="space-y-1">
               <li><Link to="/" className="hover:text-blue-600">HOME</Link></li>
               <li><Link to="/about" className="hover:text-blue-600">ABOUT</Link></li>
               <li><Link to="/products" className="hover:text-blue-600">PRODUCTS</Link></li>
               <li><Link to="/newRelese" className="hover:text-blue-600">NEW RELEASE</Link></li>
            </ul>
        </div>

    {/* Features */}
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <img src={assets.delivary} alt="Islandwide Delivery" className="w-30 h-30" />
        <p className="text-base font-bold">Islandwide Delivery<br />
          <span className="text-sm font-bold">Ensuring Convenience</span>
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <img src={assets.payment} alt="Secure Payments" className="w-30 h-30" />
        <p className="text-base font-bold">Secure Payments<br />
          <span className="text-sm font-bold">Safe And Efficient</span>
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <img src={assets.price} alt="Best Price" className="w-30 h-30" />
        <p className="text-base font-bold">Best Price<br />
          <span className="text-sm font-bold">Ultimate Affordability</span>
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <img src={assets.cod} alt="Fast Delivery" className="w-30 h-30" />
        <p className="text-base font-bold">Fast Delivery<br />
          <span className="text-sm font-bold">Customer Focused</span>
        </p>
      </div>
    </div>
  </div>

  {/* Footer bottom */}
  <div className="text-center text-xs text-gray-500 mt-4">
    © 2025 Akura Book Shop. All rights reserved.
  </div>
</footer>
    </div>
  )
}

export default Footer
