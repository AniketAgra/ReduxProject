import React, { useEffect } from 'react'
import {asynccurrentusers} from './store/actions/userActions'
import { useDispatch, useSelector } from 'react-redux';
import MainRoutes from './routes/MainRoutes';
import Nav from './components/NavBar';
// import {asyncloadproducts} from './store/actions/productActions';

const App = () => {
  const dispatch = useDispatch();

  const {users} = useSelector((state) => state.userReducer);
  // const {products} = useSelector((state) => state.productReducer);

  useEffect(() => {
    !users && dispatch(asynccurrentusers());
  }, [users]);

  // useEffect(() => {
  //   products.length === 0 && dispatch(asyncloadproducts());
  // }, [products]);


  return (
    <div className='w-screen font-thin text-white bg-gray-800'>
      <Nav/>
      <MainRoutes />
    </div>
  )
}

export default App
