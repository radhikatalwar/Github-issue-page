import { AxiosResponse } from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { setLoading } from "../../redux/global.slice";
import { allErrors } from "./slices";
import { getApiCall } from "../../common/constants";
import { RootState } from "../../redux/store";

export const getAllErrors =
  () => (dispatch: Dispatch<any>, getState: () => RootState) => {
    if (!navigator.onLine) {
      return;
    }

    dispatch(setLoading(true));

    getApiCall(
      "https://api.github.com/repos/facebook/react/issues",
      "",
      (response: AxiosResponse<any>) => {
        dispatch(allErrors(response.data));
        dispatch(setLoading(false));
      },
      () => {
        dispatch(setLoading(false));
      }
    );
  };
