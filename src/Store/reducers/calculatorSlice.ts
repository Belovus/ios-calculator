import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {stringConverter} from "../../Adapters/Adapters";

interface CalculatorState {
  expression: string
  sign: string
}

const initialState: CalculatorState = {
  expression: '0',
  sign: '',
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addExpression(state, action: PayloadAction<string>) {
      state.expression = stringConverter(action.payload, state.expression)
    },
    addSign(state, action: PayloadAction<string>) {
      state.sign = action.payload
    },
    removeExpression(state) {
      if (state.sign != 'C') {
        return
      }
      if (state.expression.length === 1) {
        state.expression = '0'
        return
      }
      state.expression = state.expression.slice(0, -1)
    }
  }
})

export default calculatorSlice.reducer