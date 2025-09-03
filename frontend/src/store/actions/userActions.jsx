import axios from "../../api/axiosconfig"
import { loaduser,removeuser } from "../reducers/userSlice";

export const asyncloginuser = (user) => async (dispatch, getState) => {
    try{
        const {data} = await axios.get(`/users?email=${user.email}&password=${user.password}`)
        localStorage.setItem("users", JSON.stringify(data[0]));
        dispatch(loaduser(data[0]));
        dispatch(asynccurrentusers());
    }catch(error){
        console.log(error);
    }
}

export const asyncregisterusers = (user) => async (dispatch, getState) => {
    try{
        getState(); // Get the current state

        const response = await axios.post('/users', user);
        dispatch(loaduser(response.data));
    }catch (error) {
        console.log(error);
    }
}

export const asynccurrentusers = () => async (dispatch, getState) => {
    try{
        const user = JSON.parse(localStorage.getItem("user"));
        if(user){
            dispatch(loaduser(user));
        }else{
            console.log("No user found");
        }
    }catch(error){
        console.log(error);
    }
}


export const asynclogoutuser = () => async (dispatch, getState) => {
    try{
        localStorage.removeItem("users");
        dispatch(removeuser());
        //OR
        // localStorage.setItem("user",null);
    }catch(error){
        console.log(error);
    }
}

export const asyncUpdateProfile = (id, profile) => async (dispatch, getState) => {
    try{
        const response = await axios.patch('/users/'+ id, profile);
        localStorage.setItem("users", JSON.stringify(response.data));
        dispatch(loaduser(response.data));
    }catch(error){
        console.log(error);
    }
}


export const asyncDeleteAccount = (id) => async (dispatch, getState) => {
    try{
        await axios.delete('/users/'+ id)
        dispatch(asynclogoutuser());
    }catch(error){
        console.log(error);
    }
}