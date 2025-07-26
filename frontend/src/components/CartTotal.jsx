import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const CartTotal = () => {

    const {currency , delivery_fee , getCartAmount} = useContext(ShopContext);

  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <h2 className="text-xl font-bold text-gray-800 mb-6">------------- CART TOTALS -------------</h2>
        </div>
        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>Sub Total</p>
                <p>{currency} {getCartAmount()}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Delivery Fee</p>
                <p>{currency} {delivery_fee}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <b>Total</b>
                <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</b>


            </div>

        </div>
      
    </div>
  )
}

export default CartTotal
