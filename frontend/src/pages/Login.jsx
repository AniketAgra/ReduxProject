import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { asyncloginuser } from '../store/actions/userActions'
import { useDispatch } from 'react-redux'

const Login = () => {
  const dispatch = useDispatch();
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();

  const LoginHandler = (user) => {
    dispatch(asyncloginuser(user));
    if(user){
      navigate('/');
    }
  }

  return (
    <form onSubmit={handleSubmit(LoginHandler)} className='flex flex-col w-1/2 justify-start'>
        <input {...register("email")} type='email' placeholder='Email' className='mb-2 p-2 border border-gray-300 rounded'/>
        <input {...register("password")} type='password' placeholder='********' className='mb-2 p-2 border border-gray-300 rounded'/>
        <button type='submit' className='bg-blue-500 text-white p-2 rounded'>Login</button>
        <p className='mt-2 text-gray-600'>Don't have an account? <Link to='/register' className='text-blue-500'>Register</Link></p>
    </form>
  )
}

export default Login
