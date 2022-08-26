import { PaletteMode } from "@mui/material"

export interface PropsSize {
    List: [
        lg: Number,
        xl: Number,
        md: Number,
        sm: Number,
        xs: Number,
    ]
}



export interface GlobalStateType {
    product: {
        Cart: []
    },
    theme: {
        theme: PaletteMode
    }
}