import { useDispatch, useSelector } from "react-redux"
import { GlobalStateType } from "../models";
import { ActionProducts } from "../store/Reducers/productReducer";
import { ActionTheme } from "../store/Reducers/ThemeReduces";

export const UseGlobal = function () {
    const dispatchState = useDispatch();
    const GlobalState = useSelector((state:GlobalStateType)=>state);
    return {dispatchState,GlobalState,ActionProducts,ActionTheme};
}