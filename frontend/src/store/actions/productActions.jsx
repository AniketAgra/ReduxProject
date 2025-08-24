import axios from "../../api/axiosconfig"
import {loadproduct} from "../reducers/productSlice"

export const asyncloadproducts = () => async (dispatch, getState) => {
    try{
        const response = await axios.get('/products');
        dispatch(loadproduct(response.data));
    }catch (error){
        console.log(error);
    }
}

export const asynccreateproduct = (product) => async (dispatch, getState) => {
    try{
        await axios.post("/products", product);
        dispatch(asyncloadproducts());
    }catch(error){
        console.log(error);
    }
}

export const asyncUpdateProduct = (id, product) => async (dispatch, getState) => {
    try{
        await axios.patch('/products/' + id, product);
        dispatch(asyncloadproducts());
    }catch(error){
        console.log(error);
    }
}

export const asyncDeleteProduct = (id) => async (dispatch, getState) => {
    try{
        await axios.delete('/products/' + id);
        dispatch(asyncloadproducts());
    }catch(error){
        console.log(error);
    }
}