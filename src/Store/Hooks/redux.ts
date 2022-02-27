import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, rootState} from "../store";


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelecor: TypedUseSelectorHook<rootState> = useSelector;