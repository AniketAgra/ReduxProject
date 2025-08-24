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
    }, 
});

export const {loaduser} = userSlice.actions;

export default userSlice.reducer;