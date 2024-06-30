import React from 'react'
import { FcDeleteDatabase } from 'react-icons/fc'
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
    <div>
      
      <div>

        <div>
          <img src={item.image} />
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <div>
            <p>{item.price}</p>
          </div>
          <div onClick={removeFromCart}>
            <FcDeleteDatabase/>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Cartitem
