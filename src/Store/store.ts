import {combineReducers, configureStore} from "@reduxjs/toolkit";
import calculatorReducer from "./reducers/calculatorSlice";

const rootRedcuer = combineReducers({
  calculatorReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootRedcuer
  })
}

export type rootState = ReturnType<typeof rootRedcuer>
export type AddStore = ReturnType<typeof setupStore>
export type AppDispatch = AddStore['dispatch']