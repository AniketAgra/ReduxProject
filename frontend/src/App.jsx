import React, { useEffect } from 'react'
import asyncgetusers from './store/userActions.jsx';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(data);

  useEffect(() => {

    dispatch(asyncgetusers());
  }, []);


  return (
    <div>App</div>
  )
}

export default App
