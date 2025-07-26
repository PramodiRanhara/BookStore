import React, { useEffect,useState,useContext } from 'react';
import { ShopContext } from '/src/context/ShopContext.jsx';
import ProductItem from './ProductItem';
import { Link, useNavigate } from "react-router-dom";




const NR = () => {

     const {  products } = useContext(ShopContext);
     const [newRelese,setnewRelese] = useState([]);
     const navigate = useNavigate();

     useEffect(()=>{
       setnewRelese(products.slice(0,4));

     },[products])

  return (
    <div className='my-10'>
        <div className="text-center my-6">
            <h2 className="text-2xl font-bold text-indigo-800 mb-6">New Arrival Books</h2>
              <hr className="border border-gray-200 mx-auto w-4/5 " />
         </div>
        
      {/* Rendering Products */}

      <div className='grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          newRelese.map((items,index)=>(
            <ProductItem key={index} id={items._id} image={items.image} name={items.name} author={items.author} price={items.price}         />
          ))
        }
      {/* Pagination Dots and View All Button */}
        <div className="flex justify-between items-center mt-10">
          <span 
                        onClick={() => navigate('/newRelese')} 
                        className="cursor-pointer text-red-600 text-xl font-semibold hover:underline ml-auto" >
                        View All Products →
                    </span>
        </div>

      </div>







    </div>
  )
}

export default NR

