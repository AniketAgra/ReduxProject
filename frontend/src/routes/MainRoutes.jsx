import {Routes, Route} from 'react-router-dom'
import { useSelector } from 'react-redux'
import {lazy} from 'react';

const Cart = lazy(() => import('../pages/Cart'));
const Home = lazy(() => import('../pages/Home'));
const Products = lazy(() => import('../pages/products'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const CreateProduct = lazy(() => import('../pages/admin/CreateProduct'));
const ProductDetails = lazy(() => import('../pages/admin/ProductDetails'));
const UserProfile = lazy(() => import('../pages/user/UserProfile'));
const PageNotFound = lazy(() => import('../PageNotFound'));
const AuthWrapper = lazy(() => import('./AuthWrapper'));
const UnauthWrapper = lazy(() => import('./UnauthWrapper'));

const MainRoutes = () => {
  const {users} = useSelector((state) => state.userReducer);
  return (
    <div>
      <Routes>
        <Route path='/' element={users ? <Products/> : <Home />} />
        
        <Route path='/login' element={
          <UnauthWrapper>
            <Login />
          </UnauthWrapper>
        } />
        <Route path='/register' element={
          <UnauthWrapper>
            <Register />
          </UnauthWrapper>
        } />

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
