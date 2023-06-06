import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ErrorsMain, Errors } from "../services/types";

export const errorsInitialValue: ErrorsMain = {
  errors: [],
};

const ErrorsModuleSlice = createSlice({
  name: "errors",
  initialState: errorsInitialValue,
  reducers: {
    allErrors: (state: ErrorsMain, action: PayloadAction<Errors[]>) => {
      state.errors = action.payload;
    },
  },
});

export const { allErrors } = ErrorsModuleSlice.actions;

export default ErrorsModuleSlice.reducer;
