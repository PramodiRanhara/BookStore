import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import BannerSlider from '../components/BannerSlider';
import NR from '../components/NR';



const Home = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between py-10 px-6 bg-orange-50">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-2xl font-bold text-[#362f84] mb-4">AKURA BOOK SHOP</h1>
          <p className="text-base text-gray-700 font-bold mb-6 ">Welcome to Akura Book Shop, your trusted online destination for quality educational materials and 
           stationery. Our mission is to support students, teachers, and lifelong learners by providing easy 
           access to a wide selection of books and learning tools.</p>
          <Link to="/about">
             <button className="bg-[#362f84] text-white px-6 py-2 rounded-full mt-4">Read More</button>
          </Link>
        </div>
         <img src={assets.hero_img} alt="Books" />
      </section>

      {/* Categories */}
      <section className="px-6 py-10">
        <h2 className="text-2xl font-bold text-left text-[#362f84] mb-6">Explore Our Top Categories</h2>
        <p className="text-base text-gray-700 font-bold mb-6 ">Akura Book Shop offers a wide range of educational materials, including school textbooks, past papers, 
         storybooks, stationery, and newspapers. Whether you're a student or teacher, we provide everything you need in one place</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow text-center">
            <img src={assets.hero_img1} alt="Story Books" className="w-50 h-50 object-cover mb-4 rounded mx-auto" />
            <h3 className="font-semibold text-lg">Work Books & Writing Books</h3>
            <p className="text-base text-gray-700  mb-6 ">Workbooks, writing books, exercise books, and practice papers – everything 
               students need to learn, revise, and improve their writing every day.</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <img src={assets.hero_img2} alt="Story Books" className="w-50 h-50 object-cover mb-4 rounded mx-auto" />
            <h3 className="font-semibold text-lg">Model Papers & Past Papers</h3>
            <p className="text-base text-gray-700  mb-6 ">Practice with real exam papers and revision books for better results.</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <img src={assets.hero_img3} alt="Story Books" className="w-50 h-50 object-cover mb-4 rounded mx-auto" />
            <h3 className="font-semibold text-lg">Stationery Items</h3>
            <p className="text-base text-gray-700  mb-6 "> Pens, pencils, notebooks, files, and everything you need for school or work</p>
          </div>
        </div>
        <div className="flex justify-center">
          <Link to="/products">
             <button className="bg-[#362f84] text-white px-6 py-2 rounded-full mt-4 align-center">View More</button>
          </Link>
        </div>
        
      </section>

      {/* ✅ New Release Books Section */}
      <div>
        <NR />  
      </div>
      

      {/* Promo Banner */}
      <div>
      <BannerSlider />
      </div>

      
      

    </div>
  );
};

export default Home;

