import React from 'react'
import { useSelector } from 'react-redux';

const AuthWrapper = (props) => {
  const users = useSelector((state) => state.userReducer.users);
  return (
    <div>
      {users ? props.children : <Navigate to='/login' />}
    </div>
  )
}

export default AuthWrapper
