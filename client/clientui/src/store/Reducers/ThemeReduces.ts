import { createSlice, configureStore } from "@reduxjs/toolkit";

const ThemeState_GB = createSlice({
    name: "themeState",
    initialState: {
        theme: "dark"
    }, reducers: {
        SetTheme(state, action) {
            state.theme = action.payload
        }
    }
})

export const ThemeAction = ThemeState_GB.actions;
const ThemeStore = configureStore({
    reducer: ThemeState_GB.reducer
})
export default ThemeStore


