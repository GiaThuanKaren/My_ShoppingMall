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

export interface FilterCondition {
    List: [
        brand?: string,
        size?: string,
        material?: string,
        ProductFrom?: string,
        color?: string,
        sex?: string,
        form?: string,
        classify?: string,
        kindProdcut?: string,
        promotion?: string,
        gifts?: string,
        price?: string,
    ]
}