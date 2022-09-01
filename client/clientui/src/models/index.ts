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
    slug?: string,
    brand?: string,
    "size-giay-dep"?: string,
    "chat-lieu"?: string,
    "xuat-xu"?: string,
    "mau-sac"?: string,
    "gioi-tinh"?: string,
    "kieu-dang"?: string,
    "phan-loai"?: string,
    "mat-hang"?: string,
    promotion?: string,
    gifts?: string,
    price?: string,
    page?: number,
}