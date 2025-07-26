import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduct from '../components/RelatedProduct';

function Viewd() {

const {productId} = useParams();
const {products , currency , addToCart} = useContext(ShopContext);
const [productData ,setProductData ] = useState(false);
const[image , setImage]  = useState('');


const fetchProductData = async () => {

 products.map((item)=>{
   if (item._id == productId){
      setProductData(item)
      setImage(item.image[0])

      console.log(item);
      
      return null;

   }


 })


}

 useEffect(()=>{
  fetchProductData();
 },[productId])


  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>

       {/*------------- Product Data ---------------- */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/*------------ Product Images----------*/}
         <div className='flex flex-col sm:flex-row items-center sm:items-start gap-6'>

          <div className='w-full sm:w-[75%] flex justify-center'>
            {
              productData.image.map((item,index)=>(
                
                 <img src={item} key={index} className='w-80 sm:w-96 object-contain cursor-pointer ' alt="" />
              ))
            }
             
          </div>
          
             
         </div>
           
           {/* --------Product Info ----------- */}
           <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
             <div className='flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} alt="" className="w-3 5"/>
              <img src={assets.star_icon} alt="" className="w-3 5"/>
              <img src={assets.star_icon} alt="" className="w-3 5"/>
              <img src={assets.star_icon} alt="" className="w-3 5"/>
              <img src={assets.star_dull_icon} alt="" className="w-3 5"/>
              <p className='pl-2'>(122)</p>
             </div>

             <p className='mt-5 text-2xl font-medium'>{currency}{productData.price}</p>
             <p className='mt-5 texy-gray-500 md:w-4/5'>{productData.description}</p>
             {productData.newRelease && (
                   <>
                   <p className='mt-2 text-gray-600 md:w-4/5 font-bold'> Author : {productData.author}</p>
                   <p className='mt-2 text-gray-600 md:w-4/5 font-bold'> Publisher : {productData.publisher} </p>
                   <p className='mt-2 text-gray-600 md:w-4/5 font-bold'> ISBN : {productData.isbn}</p>
                   </>
              )}

             <button onClick={()=>addToCart(productData._id)} className='bg-black text-white px-8 py-3 text-sm active:bbg-gray-700 mt-3'>ADD TO CART</button>
              <hr className='mt-8 sm:w-4/5'/>
              <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                 <p>Cash on delivery is available on this product</p>
                 <p>100% Original Products </p>


              </div>
           </div>

      </div>
      
      {/* --------------------Description & Review Section---------------- */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
           <p>An online bookshop is an e-commerce website where customers can browse, order, and purchase books and stationery items. It allows users to shop anytime, view new arrivals, and get their orders delivered to their doorstep.</p>
          <p>An online bookshop is a digital platform that sells books, magazines, and stationery items. Customers can explore products, place orders, make payments online, and receive delivery at home.</p>
        </div>

      </div>
      
     {/* ------------------------Display related Products------------------ */}
     <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : <div className=' opacity-0'></div>
}

export default Viewd
