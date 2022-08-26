import { createSlice, configureStore } from "@reduxjs/toolkit";



const ProductState_GB = createSlice({
    name: "ProductState_GB",
    initialState: {
        Cart: []
    }
    , reducers: {

    }
})


export const ActionProducts = ProductState_GB.actions;

export default ProductState_GB.reducer;