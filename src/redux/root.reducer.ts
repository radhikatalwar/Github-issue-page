import { combineReducers } from "@reduxjs/toolkit";
import globalSlice from "./global.slice";
import errorsSlice from "../pages/services/slices";

const rootReducer = combineReducers({
  globalcontent: globalSlice,
  errorcontent: errorsSlice,
});

export default rootReducer;
