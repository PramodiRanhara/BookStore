import React, { useContext, useState } from 'react'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {

  const [method,setMethod] = useState('cod');
  const {navigate} = useContext(ShopContext);



  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* -------Left side ------------ */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <h2 className="text-xl font-bold text-gray-800 mb-6">------ DELIVERY INFORMATION ------</h2>
        </div>
           <div className='flex gap-3'>
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="text" placeholder='First Name' />
             <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="text" placeholder='Last Name' />
           </div>
           <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="email" placeholder='Email Address' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="text" placeholder='Street' />
          <div className='flex gap-3'>
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="text" placeholder='City' />
             <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="text" placeholder='State' />
           </div>
           <div className='flex gap-3'>
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="number" placeholder='Postal Code' />
             <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="text" placeholder='District' />
           </div>
             <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="number" placeholder='Phone' />
      </div>

      {/* --------Right Side--------- */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal/>
        </div>

        <div className='mt-12'>
          <h2 className="text-xl font-bold text-gray-800 mb-6">------ PAYMENT METHOD ------</h2>

          {/* -----------Payment Method Selection---------- */}

           <div className='flex gap-3 flex-col lg:flex-row'>
             <div onClick={()=>setMethod('pay_here')} className='flex item-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method ==='pay_here' ? 'bg-blue-400' : ''} `}> </p>
              <img className='h-5 mx-4' src = {assets.pay_here_logo} alt=""   />
             </div>
             <div onClick={()=>setMethod('webxpay')} className='flex item-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method ==='webxpay' ? 'bg-blue-400' : ''} `}></p>
              <img className='h-5 mx-4' src = {assets.webxpay_logo} alt=""   />
             </div>
             <div onClick={()=>setMethod('cod')} className='flex item-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method ==='cod' ? 'bg-blue-400' : ''} `}></p>
                <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
             </div>
           </div>
            
                <div className='w-full text-end mt-8'>
                  <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>

                </div>




        </div>

      </div>



    </div>
  )
}

export default PlaceOrder
