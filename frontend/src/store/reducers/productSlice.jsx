import { createSlice } from "@reduxjs/toolkit";
import { lazy } from "react";

const initialState = {
    products: [],
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers : {
        loadproduct: (state, action) => {
            state.products = action.payload; // Update the state with the fetched product data
        },
        loadlazyproduct: (state, action) => {
            state.products = [...state.products, ...action.payload]; // Append new products to the existing list
        }
    }
})

export default productSlice.reducer;

export const {loadproduct, loadlazyproduct} = productSlice.actions;