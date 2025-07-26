import React from 'react';
import aboutImg from '../assets/about.jpg'; // replace with your actual path
import visionImg from '../assets/Vision.png';      // replace with your actual path
import visionImg1 from '../assets/mission.jpg';
import { assets } from '../assets/assets';


const About = () => {
  return (
    <div className="px-4 md:px-16 py-10 text-gray-700">
      <h1 className="text-3xl font-bold text-[#362f84] mb-6">AKURA BOOK SHOP</h1>

      <p className="mb-6">
        Welcome To Akura Book Shop, Your Trusted Online Destination For Quality Educational
        Materials And Stationery. Our Mission Is To Support Students, Teachers, And Lifelong
        Learners By Providing Easy Access To A Wide Selection Of Books And Learning Tools.
      </p>

      <div className="mb-6">
        <p>At Akura Book Shop, We Offer:</p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>School Work Books & Writing Books</li>
          <li>Model Papers & Past Papers</li>
          <li>Storybooks & Novels</li>
          <li>Stationery Items</li>
        </ul><br />
        <p className="flex-1">
          We Are Committed To Making Your Shopping Experience Smooth And Reliable. With Our
          User-Friendly Website, You Can Browse, Order, And Pay Online With Ease. Once Your
          Order Is Placed, We'll Notify You Of Its Progress, And You'll Be Updated When It's
          Ready For Delivery.
          <br /><br />
         <b>Thank You For Choosing Akura Book Shop</b> 
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
        
        <img src={assets.aboutImg} alt="Books" className="w-50 md:w-1/2 rounded shadow" />
      </div>

      <div className="bg-[#f4f7fb] p-6 rounded-lg mb-10">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-900">Vision & Mission</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1 text-center">
            <h3 className="text-xl font-bold mb-2">Vision</h3>
            <p>To be the leading online bookshop in Sri Lanka, empowering education through innovation, excellent service, and a commitment to lifelong learning.</p>
            <img src={assets.visionImg} alt="Vision" className="mt-4 rounded shadow mx-auto w-60" />
          </div>

          <div className="flex-1 text-center">
            <h3 className="text-xl font-bold mb-2">Mission</h3>
            <p>
              To provide high-quality educational resources and stationery at affordable prices, making learning accessible and convenient for students, teachers, and parents across Sri Lanka through a reliable online platform.
            </p>
            <img src={assets.visionImg1} alt="Mission" className="mt-4 rounded shadow mx-auto w-60" />
          </div>
        </div>
      </div>

      <div className="text-lg text-gray-800 leading-relaxed space-y-2 font-bold">
        <p>
         <span className="font-semibold">Our Store :</span> “Akura Book Shop”, Hettiweediya, Weligama
        </p>
        <p>
         <span className="font-semibold">Contact :</span>{" "}
           <a href="tel:+94412250830" className="text-blue-600 hover:underline">
            +94412250830
           </a>
        </p>
        <p>
           <span className="font-semibold">E-Mail :</span>{" "}
            <a href="mailto:akurabookshop@gmail.com" className="text-blue-600 hover:underline">
              akurabookshop@gmail.com
            </a>
        </p>
      </div>


      



    </div>
  );
};

export default About;
