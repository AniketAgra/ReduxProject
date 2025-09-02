import React from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { asynccreateproduct } from '../../store/actions/productActions';

const CreateProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, reset, handleSubmit } = useForm()

  const CreateProductHandler = (product) => {
    product.id = nanoid();
    navigate('/');
    dispatch(asynccreateproduct(product)); // Dispatch the async action

  }
  return (
    <form onSubmit={handleSubmit(CreateProductHandler)} className='flex flex-col w-1/2 justify-start'>
        <input {...register("image")} type='text' placeholder='Product Image URL' className='mb-2 p-2 border border-gray-300 rounded'/>
        <input {...register("title")} type='text' placeholder='Product Title' className='mb-2 p-2 border border-gray-300 rounded'/>
        <textarea {...register("description")} placeholder='Product Description' className='mb-2 p-2 border border-gray-300 rounded'/>
        <input {...register("price")} type='number' placeholder='Product Price' className='mb-2 p-2 border border-gray-300 rounded'/>
        <button type='submit' className='bg-blue-500 text-white p-2 rounded'>Create</button>
    </form>
  )
}

export default CreateProduct

