import React from 'react'
import { NavLink, useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { asynclogoutuser } from '../store/actions/userActions';


const NavBar = () => {
  const user = useSelector((State) => State.userReducer.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(asynclogoutuser());
    navigate('/');
  }

  return (
    <nav className='mb-3 w-full h-16 bg-gray-900 flex justify-center items-center px-4 gap-4'>


      <NavLink to='/' className='text-white'>
        Home
      </NavLink>
      <NavLink to='/products' className='text-white'>
        Products
      </NavLink>

      {user ? (
        <>
          <NavLink to='/admin/create-product' className='text-white'>
            Create Product
          </NavLink>
          <button onClick={logoutHandler} className='text-white'>
            Logout
          </button>
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
