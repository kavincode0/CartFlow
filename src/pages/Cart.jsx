import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Cartitem from '../components/Cartitem'

const Cart = () => {

  const {cart} = useSelector((state) => state)
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div>
      {
        cart.length > 0 ?
        (<div className='flex justify-around w-[70vw] gap-20 mx-auto'>
          <div className='flex flex-col '>
          {
            cart.map((item, index) => {
              return <Cartitem key = {item.id} item = {item} itemIndex = {index} />
            })
          }
          
          </div>

          <div>

            <div className='flex flex-col justify-between py-3 h-[80vh]'>
              <div>
              <div className='text-green-600 text-3xl pt-5'>Your Cart</div>
              <div>Summary</div>
              <p>
                <span>Total Items: {cart.length}</span>
              </p>
              </div>
              
            </div>

            <div>
              <p>Total Amount: ${totalAmount}</p>
              <button>
                Checkout Now
              </button>
            </div>

          </div>

        </div>):
        (<div>
          <h2>Cart Empty</h2>  
          <Link to={"/"}>
            <button>
              Shop Now
            </button>
          </Link>
        </div>)
      }
    </div>
  )
}

export default Cart
