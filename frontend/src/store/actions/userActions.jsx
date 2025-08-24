import axios from "../../api/axiosconfig"
import { loaduser } from "../reducers/userSlice";

export const asyncloginuser = (user) => async (dispatch, getState) => {
    try{
        const {data} = await axios.get(`/users?email=${user.email}&password=${user.password}`)
        localStorage.setItem("user", JSON.stringify(data[0]));
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

export const asynccurrentuser = () => async (dispatch, getState) => {
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
        localStorage.removeItem("user");
        //OR
        // localStorage.setItem("user",null);
    }catch(error){
        console.log(error);
    }
}