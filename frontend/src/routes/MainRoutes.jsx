import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/products'
import Login from '../pages/Login'
import Register from '../pages/Register'
import CreateProduct from '../pages/admin/CreateProduct'
import ProductDetails from '../pages/admin/ProductDetails'
import { useSelector } from 'react-redux'
import UserProfile from '../pages/user/UserProfile'
import PageNotFound from '../PageNotFound'
import AuthWrapper from './AuthWrapper'
import Cart from '../pages/Cart'

const MainRoutes = () => {
  const {users} = useSelector((state) => state.userReducer);
  return (
    <div>
      <Routes>
        <Route path='/' element={users ? <Products/> : <Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/admin/create-product' element={
          <AuthWrapper>
            <CreateProduct />
          </AuthWrapper>
        } />
        <Route path='/admin/user-profile' element={
          <AuthWrapper>
            <UserProfile />
          </AuthWrapper>
        } />
        <Route path='/product/:id' element={
          <AuthWrapper>
            <ProductDetails />
          </AuthWrapper>
        } />

        <Route path='/cart' element={
          <AuthWrapper>
            <Cart />
          </AuthWrapper>
        } />

        <Route path='/*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default MainRoutes
