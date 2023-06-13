import { useEffect } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { RootState } from "../redux/store";
import { getAllErrors } from "./services/action";
import { setPage } from "./services/slices";

const useErrorHelper = () => {
  const dispatch = useAppDispatch();
  const { errors, page } = useAppSelector(
    (state: RootState) => state.errorcontent
  );

  const handleScroll = (evt: any) => {
    const bottom =
      evt.target.scrollHeight <=
      evt.target.scrollTop + evt.target.clientHeight + 1;

    if (bottom) {
      dispatch(setPage(page + 1));
      dispatch(getAllErrors());
    }
  };

  useEffect(() => {
    dispatch(getAllErrors());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { errors, handleScroll };
};
export default useErrorHelper;
