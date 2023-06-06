import { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { RootState } from "../redux/store";
import { getAllErrors } from "./services/action";

const useErrorHelper = () => {
  const dispatch = useAppDispatch();
  const { errors } = useAppSelector((state: RootState) => state.errorcontent);
  const [count, setCount] = useState(15);

  const handleScroll = (evt: any) => {
    const bottom =
      evt.target.scrollHeight <=
      evt.target.scrollTop + evt.target.clientHeight + 1;
    if (bottom) {
      if (errors.length > count + 10) {
        setCount(count + 10);
      } else {
        setCount(errors.length);
      }
    }
  };

  useEffect(() => {
    dispatch(getAllErrors());
  }, [dispatch]);

  return { errors: errors.slice(0, count), handleScroll };
};
export default useErrorHelper;
