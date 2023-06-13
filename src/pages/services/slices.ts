import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ErrorsMain, Errors } from "../services/types";

export const errorsInitialValue: ErrorsMain = {
  errors: [],
  page: 1,
  limit: 10,
};

const ErrorsModuleSlice = createSlice({
  name: "errors",
  initialState: errorsInitialValue,
  reducers: {
    allErrors: (state: ErrorsMain, action: PayloadAction<Errors[]>) => {
      state.errors = action.payload;
    },
    setPage: (state: ErrorsMain, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { allErrors, setPage } = ErrorsModuleSlice.actions;

export default ErrorsModuleSlice.reducer;
