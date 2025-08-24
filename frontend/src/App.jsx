import React, { useEffect } from 'react'
import {asynccurrentusers} from './store/actions/userActions'
import { useDispatch, useSelector } from 'react-redux';
import MainRoutes from './routes/MainRoutes';
import Nav from './components/NavBar';
import {asyncloadproducts} from './store/actions/productActions';

const App = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(data);

  useEffect(() => {

    dispatch(asynccurrentusers());
    dispatch(asyncloadproducts());
  }, []);


  return (
    <div className='w-screen h-screen font-thin text-white bg-gray-800 overflow-auto'>
      <Nav/>
      <MainRoutes />
    </div>
  )
}

export default App
