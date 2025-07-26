import React, { useContext } from "react";
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id,image,name,author,price}) => {

      const {currency} = useContext(ShopContext);
    

  return (
    <div className="flex justify-center items-center">
   <Link to={`/product/${id}`} className="w-56 h-[380px] p-4 shadow-md rounded-lg hover:shadow-lg transition text-center flex flex-col justify-between">
  <div className="w-full h-60 flex justify-center items-center overflow-hidden">
    <img
      src={image[0]}
      alt={name}
      className="h-52 object-contain"/>
  </div>

  <h3 className="text-m font-semibold text-indigo-800 mt-3">{name}</h3>
  <p className="text-sm text-gray-600">{author}</p>
  <p className="text-red-600 text-sm font-semibold">{currency}{price}</p>
</Link>
</div>


  )
}

export default ProductItem
