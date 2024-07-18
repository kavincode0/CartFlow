import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux'
import { remove } from '../redux/slices/cartSlice'
import toast from 'react-hot-toast'

const Cartitem = ({item, itemIndex}) => {

  const dispatch = useDispatch()

  const removeFromCart = () => {
    dispatch(remove(item.id))
    toast.success("Item removed")
  }

  return (
  <div className='flex flex-col space-y-4'>
    <div className='flex justify-between items-center space-x-4'>
<div className='h-[180px]'>
  <img src={item.image} alt='' className='h-full w-full'/>
</div>
<div className='flex flex-col gap-3'>
  <h1 className='font-semibold text-2xl'>{item.title}</h1>
  <h1 className='text-slate-600'>{item.description.split(" ").slice(0,10).join(" ")}</h1>
  <div className='flex justify-between items-center'>
  <div>
    <p className='text-green-700 font-semibold'>${item.price}</p>
  </div>
  <div className='bg-red-300 text-red-700 rounded-full w-6 h-6 flex justify-center items-center' onClick={removeFromCart}>
  <MdDelete />
  </div>
  </div>
</div>
</div>
<div className='bg-slate-700 h-[2px] w-full'>
</div>
      </div>
  )
}

export default Cartitem
