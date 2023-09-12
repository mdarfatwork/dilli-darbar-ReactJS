import React from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import { incrementQuantity, decrementQuantity, removeItem} from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'

const CartItem = ({id, photo, name, price, quantity=0}) => {
  const dispatch = useDispatch()
  return (
    <div className="flex gap-6 py-2">
      <span className='flex justify-center items-center'><img className='w-40' src={photo} alt="" /></span>
      <span className="flex flex-col items-center gap-2 justify-center">
        <span>{name}</span>
        <span>Price: ₹{price}</span>
        <span className='flex gap-1'>
        <span className='flex justify-center items-center py-1 px-2 bg-gray-300 cursor-pointer' onClick={() => dispatch(decrementQuantity(id))}><AiOutlineMinus/></span>
        <span className='flex justify-center items-center py-1 bg-gray-200 px-8'>{quantity}</span>
        <span className='flex justify-center items-center py-1 px-2 bg-gray-300 cursor-pointer' onClick={() => dispatch(incrementQuantity(id))}><AiOutlinePlus/></span>
        </span>
        <div onClick={() => dispatch(removeItem(id))} className="text-sm text-gray-700 bg-gray-300 p-1 rounded font-sans">Delete</div>
      </span>
    </div>
  )
}

export default CartItem