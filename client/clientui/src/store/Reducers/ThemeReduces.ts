import { createSlice, configureStore } from "@reduxjs/toolkit";

const ThemeState_GB = createSlice({
    name: "themeState",
    initialState: {
        theme: "light"
    },
    reducers: {
        SetTheme(state, action) {
            console.log("Reducer Theme",action.payload)
            state.theme = action.payload
        }
    }
})

export const ActionTheme = ThemeState_GB.actions;

export default ThemeState_GB.reducer;


