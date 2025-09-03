import React from 'react'
import { loadlazyproduct } from '../store/reducers/productSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';


import axios from '../api/axiosconfig';

const useInfiniteProducts = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.productReducer);
    const [hasMore, setHasMore] = useState(true);

    const fetchProducts = async () => {
        try {
            const { data } = await axios.get(`/products?_limit=6&_start=${products.length}`);
            if (data.length === 0) {
            setHasMore(false);
            } else {
            dispatch(loadlazyproduct([...products, ...data]));
            setHasMore(true);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return { fetchProducts, hasMore, products };
}

export default useInfiniteProducts
