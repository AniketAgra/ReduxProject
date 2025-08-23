import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loaduser: (state, action) => {
            state.data = action.payload; // Update the state with the fetched user data
        },
    }, 
});

export const {loaduser} = userSlice.actions;

export default userSlice.reducer;