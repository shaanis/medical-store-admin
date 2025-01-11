import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='flex  w-full  p-3 fixed bg-violet-400 z-1'>
        <h5 className='font-bold '>
      <i class="fa-solid fa-heart-pulse text-red-600 text-xl"></i>
            &nbsp; HealthCart
            </h5>
        <div className='flex-1 text-right'>
            <Link className='me-8 font-medium' to={'/'} >Home</Link>
            <Link to={'/healthBlog'} className='me-5 font-medium'>Health Blog </Link>
            <a href='#footer' className='me-8 font-medium'>Contact us</a>

        </div>
    </nav>
  )
}

export default Header