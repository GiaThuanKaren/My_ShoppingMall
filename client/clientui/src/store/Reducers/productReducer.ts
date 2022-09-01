import { createSlice, configureStore } from "@reduxjs/toolkit";



const ProductState_GB = createSlice({
    name: "ProductState_GB",
    initialState: {
        Cart: [],
        ListProduct: []
    }
    , reducers: {
        SetListProduct(state,action){
            
        }
    }
})


export const ActionProducts = ProductState_GB.actions;

export default ProductState_GB.reducer;