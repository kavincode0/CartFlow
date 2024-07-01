import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import logo from "../Logo/Cartflow.png"
import { useSelector } from 'react-redux'

const Navbar = () => {
  const {cart} = useSelector((state) => state)
  return (
    <div className='bg-[#016d60]'>
      <nav className='flex flex-row justify-between items-center h-20 max-w-4xl pb-3 mx-auto'>
        <NavLink to='/'>
            <div>
                <img src={logo} alt="" width={180} height={180}/>
            </div>
        </NavLink>
        <div className='flex items-center gap-4 text-slate-300'>
            <NavLink to='/'>
                <p>Home</p>
            </NavLink>
            <NavLink to='/cart'>
               <div className='relative text-2xl'>
                 <FaShoppingCart></FaShoppingCart>
                {
                  cart.length > 0 && 
                  <span className='absolute animate-bounce bottom-3 left-3 bg-red-600 rounded-full w-5 h-5 text-sm flex justify-center items-center'>{cart.length}</span>
                }
               </div>
            </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
