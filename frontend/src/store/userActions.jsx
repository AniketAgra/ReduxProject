import axios from "../api/axiosconfig"
import { loaduser } from "./userSlice";

export const asyncgetusers = () => async (dispatch, getState) => {
    try{
        getState(); // Get the current state

        const response = await axios.get('/users');
        dispatch(loaduser(response.data));
    }catch (error) {
        console.log(error);
    }
}
