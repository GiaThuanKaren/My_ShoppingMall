import { createSlice, configureStore, combineReducers } from "@reduxjs/toolkit";
import ProductStore from "./Reducers/productReducer";
import ThemeStore from "./Reducers/ThemeReduces";

export { ProductStore, ThemeStore }

const reducers = combineReducers({
    product: ProductStore,
    theme: ThemeStore
});


const store = configureStore({
    reducer: reducers
})

export default store