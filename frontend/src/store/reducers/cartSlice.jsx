import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        loadcart: (state, action) => {
            state.carts = action.payload; // Update the state with the fetched cart data
        }
    },
})

export const {loadcart} = cartSlice.actions;

export default cartSlice.reducer;

//we export the actions to be used in the components and reducers 