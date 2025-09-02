import React from 'react'
import { NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'


const NavBar = () => {
  const user = useSelector((State) => State.userReducer.users);

  return (
    <nav className='mb-3 w-full h-16 bg-gray-900 flex justify-center items-center px-4 gap-4'>


      <NavLink to='/' className='text-white'>
        Home
      </NavLink>
      

      {user ? (
        <>

          {user.isAdmin && (
            <NavLink to='/admin/create-product' className='text-white'>
              Create Product
            </NavLink>
          )}
          <NavLink to='/admin/user-profile' className='text-white'>
            Settings
          </NavLink>
          <NavLink to='/cart' className='text-white'>
            Cart
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to='/login' className='text-white'>
            Login
          </NavLink>
        </>
      )}
    </nav>
  )
}

export default NavBar
