import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='mb-3 w-full h-16 bg-gray-900 flex justify-center items-center px-4 gap-4'>
      <NavLink to='/' className='text-white'>
        Home
      </NavLink>
      <NavLink to='/products' className='text-white'>
        Products
      </NavLink>
      <NavLink to='/login' className='text-white'>
        Login
      </NavLink>
      {/* <NavLink to='/register' className='text-white'>
        Register
      </NavLink> */}
    </nav>
  )
}

export default NavBar
