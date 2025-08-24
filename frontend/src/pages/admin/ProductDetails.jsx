import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import {asyncUpdateProduct, asyncDeleteProduct} from '../../store/actions/productActions';

const ProductDetails = () => {
  const {id} = useParams();
  const { productReducer: { products },
          userReducer: { users }
        } = useSelector((state) => state);

  const product = products.find((prod) => prod.id === id);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, reset, handleSubmit } = useForm({
    defaultValues:{
      image : product?.image,
      title : product?.title,
      description : product?.description,
      price : product?.price
    }
  })

  const UpdateProductHandler = (product) => {
    dispatch(asyncUpdateProduct(id, product)); // Dispatch the async action

  }

  const DeleteProductHandler = () => {
    dispatch(asyncDeleteProduct(id)); // Dispatch the async action
    navigate('/products');
  }

  return product ? (
    <div className='p-10 overflow-auto'>
      <div className='p-4 shadow flex flex-row items-center gap-4'>
      {product ? (
        <>
          <img className='w-1/2 h-1/2 object-cover' src={product.image} alt={product.title} />
          <div className="flex flex-col w-1/2 h-1/2 justify-center items-start gap-3">
            <h1 className='text-2xl font-bold'>{product.title}</h1>
            <p className='mt-2'>{product.description}</p>
            <p className='font-bold text-green-500'>${product.price}</p>
            <button className="p-3 mt-3 bg-blue-500 text-white py-1 px-4 rounded w-1/2">Add to Cart</button>
          </div>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>

    {users && users?.isAdmin &&
      (
        <div className="">
          <form onSubmit={handleSubmit(UpdateProductHandler)} className='flex flex-col w-1/2 justify-start'>
              <input {...register("image")} type='text' placeholder='Product Image URL' className='mb-2 p-2 border border-gray-300 rounded'/>
              <input {...register("title")} type='text' placeholder='Product Title' className='mb-2 p-2 border border-gray-300 rounded'/>
              <textarea {...register("description")} placeholder='Product Description' className='mb-2 p-2 border border-gray-300 rounded'/>
              <input {...register("price")} type='number' placeholder='Product Price' className='mb-2 p-2 border border-gray-300 rounded'/>
              <button type='submit' className='bg-blue-500 text-white p-2 rounded mb-1'>Update</button>
              <button type='button' className='bg-pink-500 text-white p-2 rounded' onClick={DeleteProductHandler}>Delete</button>
          </form>
        </div>
      )
    } 
  </div>
  ): <div>Loading...</div>
}

export default ProductDetails
