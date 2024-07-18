import React from 'react'
import { DiVim } from 'react-icons/di'

const Spinner = () => {
  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Spinner
