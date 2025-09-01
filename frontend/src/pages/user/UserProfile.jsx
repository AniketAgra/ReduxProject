import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { asyncDeleteAccount, asyncUpdateProfile, asynclogoutuser } from '../../store/actions/userActions';

const UserProfile = () => {

  const { userReducer: { users }} = useSelector((state) => state);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, reset, handleSubmit } = useForm({
    defaultValues:{
      username : users?.username,
      email : users?.email,
      password : users?.password,
    }
  })

  const UpdateProfileHandler = (profile) => {
    dispatch(asyncUpdateProfile(users?.id, profile)); // Dispatch the async action
  }

  const DeleteAccountHandler = () => {
    dispatch(asyncDeleteAccount(users?.id));
    navigate('/');
  }

  const logoutHandler = () => {
    dispatch(asynclogoutuser());
    navigate('/');
  }

  return users ? (
    <div>
        <h1 className='text-2xl font-bold'>{users.username}</h1>
        <h1 className='text-lg'>{users.email}</h1>
        <hr className='my-10'/>
        <form onSubmit={handleSubmit(UpdateProfileHandler)} className='flex flex-col w-1/2 justify-start'>
              <input {...register("username")} type='text' placeholder='Username' className='mb-2 p-2 border border-gray-300 rounded'/>
              <input {...register("email")} type='text' placeholder='Email' className='mb-2 p-2 border border-gray-300 rounded'/>
              <textarea {...register("password")} placeholder='Password' className='mb-2 p-2 border border-gray-300 rounded'/>
              <button onClick={logoutHandler} className='bg-pink-500 text-white p-2 rounded'>Logout</button>
              <button type='submit' className='bg-blue-500 text-white p-2 rounded mt-2'>Update Profile</button>
              <button type='button' className='bg-red-500 text-white p-2 rounded mt-2' onClick={DeleteAccountHandler}>Delete Account</button>
          </form>
    </div> 
  ) : (
    <div>Loading...</div>
  )
}

export default UserProfile
