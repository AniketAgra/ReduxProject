import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loaduser: (state, action) => {
            state.users = action.payload; // Update the state with the fetched user data
        },
        removeuser: (state, action) => {
            state.users = null;
        }
    }, 
});

export const {loaduser, removeuser} = userSlice.actions;

export default userSlice.reducer;