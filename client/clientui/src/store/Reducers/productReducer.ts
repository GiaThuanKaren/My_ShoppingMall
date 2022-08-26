import { createSlice, configureStore } from "@reduxjs/toolkit";



const ProductState_GB = createSlice({
    name: "ProductState_GB",
    initialState: {
        a: 0
    }
    , reducers: {

    }
})


export const ActionProducts = ProductState_GB.actions;

const ProductStore = configureStore({
    reducer : ProductState_GB.reducer
})

export default ProductStore