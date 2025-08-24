import { nanoid } from '@reduxjs/toolkit'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { asyncregisterusers } from '../store/actions/userActions'
import { useDispatch } from 'react-redux'

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, reset, handleSubmit } = useForm()

  const RegisterHandler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;

    dispatch(asyncregisterusers(user)); // Dispatch the async action

    navigate('/login')
  }
  return (
    <form onSubmit={handleSubmit(RegisterHandler)} className='flex flex-col w-1/2 justify-start'>
        <input {...register("username")} type='text' placeholder='Username' className='mb-2 p-2 border border-gray-300 rounded'/>
        <input {...register("email")} type='email' placeholder='Email' className='mb-2 p-2 border border-gray-300 rounded'/>
        <input {...register("password")} type='password' placeholder='********' className='mb-2 p-2 border border-gray-300 rounded'/>
        <button type='submit' className='bg-blue-500 text-white p-2 rounded'>Register</button>
        <p className='mt-2 text-gray-600'>Already have an account? <Link to='/login' className='text-blue-500'>Login</Link></p>
    </form>
  )
}

export default Register
