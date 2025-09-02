import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { asyncUpdateProfile } from '../store/actions/userActions';

const Cart = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.userReducer);
    const { products } = useSelector((state) => state.productReducer);

    const IncreaseQuantityHandler = (product, index) => {
        const cartArray = Array.isArray(users.cart) ? users.cart : [];
        const copyCart = { ...users, cart: [...cartArray] }; 

        copyCart.cart[index] = {
            productId: product.id,
            quantity: copyCart.cart[index].quantity + 1
        };

        dispatch(asyncUpdateProfile(users.id, copyCart));
    }

    const DecreaseQuantityHandler = (product, index) => {
        const cartArray = Array.isArray(users.cart) ? users.cart : [];
        const copyCart = { ...users, cart: [...cartArray] };
        if (copyCart.cart[index].quantity > 1) {
            copyCart.cart[index] = {
                productId: product.id,
                quantity: copyCart.cart[index].quantity - 1
            };
        }else {
            copyCart.cart.splice(index, 1);
        }

        dispatch(asyncUpdateProfile(users.id, copyCart));
    }


    const removeFromCart = (productId) => {
        const cartArray = Array.isArray(users.cart) ? users.cart : [];
        const copyCart = { ...users, cart: [...cartArray] };
        copyCart.cart = copyCart.cart.filter(item => item.productId !== productId);
        dispatch(asyncUpdateProfile(users.id, copyCart));
    }

    const cartItems = (Array.isArray(users?.cart) ? users.cart : []).map((item,index) => {
        const product = products.find((prod) => prod.id === item.productId);
        return (
            <li className='flex items-center mb-3 ml-2 bg-gray-600 pt-2 pb-2 rounded-1xl' key={item.productId}>
                <img className='w-16 h-16 object-cover ml-1' src={product?.image} alt={product?.title} />
                <div className='ml-4'>
                    <p>{product ? product.title : 'Unknown Product'}</p>
                    <p>Quantity: {item.quantity}</p>
                </div>
                <span className='ml-auto mr-4'>${product ? (product.price * item.quantity).toFixed(2) : '0.00'}</span>
                <p>
                    <button onClick={() => DecreaseQuantityHandler(product, index)} className='bg-blue-500 text-white px-2 py-1 rounded'>-</button>
                    <span className='mx-2 p-1 rounded bg-gray-700'>{item.quantity}</span>
                    <button onClick={() => IncreaseQuantityHandler(product, index)} className='bg-blue-500 text-white px-2 py-1 rounded'>+</button>
                </p>
                <button onClick={() => removeFromCart(item.productId)} className='ml-auto mr-2 bg-red-500 text-white px-4 py-2 rounded'>
                    Remove
                </button>
            </li>
        );
    });

    // Ensure users.cart is always an array to prevent errors
    // If users or users.cart is undefined, fallback to empty array

  return (
    <div>
        Cart Page
        <ul>
            {cartItems}
        </ul>
    </div>
  )
}

export default Cart
