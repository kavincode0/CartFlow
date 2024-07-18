import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { add, remove } from '../redux/slices/cartSlice'

const Product = ({post}) => {
  const {cart} = useSelector((state) => state)
  const dispatch = useDispatch();

  const addToCart = ()=>{
    dispatch(add(post));
    toast.success("Item added to cart")
  }
  const removeFromCart = ()=>{
    dispatch(remove(post.id));
    toast.success("Item removed from cart")
  }

  return (
    <div className='flex flex-col justify-center items-center hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline'>
      <div>
        <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title}</p>
      </div>
      <div>
        <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
      </div>
      <div className='h-[180px]'>
        <img src={`${post.image}`} alt="" className='h-full w-full'/>
      </div>
      <div className='flex justify-between items-center gap-12'>
        <p className='text-[#04562b] font-bold '>${post.price}</p>
        {
        cart.some((p) => p.id === post.id) ?
        (<button className='border-2 border-black rounded-full bg-[#c7bdbd] p-2 hover:bg-[#272525] font-semibold hover:text-white transition duration-300 ease-in' onClick={removeFromCart}>
          Remove Item
        </button>) :
        (<button className='border-2 border-black rounded-full bg-[#c7bdbd] p-2 hover:bg-[#272525] font-semibold hover:text-white transition duration-300 ease-in' onClick={addToCart}>
          Add to Cart
        </button>)
      }
      </div>
      
    </div>
  )
}

export default Product
