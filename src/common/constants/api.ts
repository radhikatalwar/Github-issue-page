import { $axios } from "./axios.instance";

const getApiCall = (
  endPoint: string,
  params: string,
  successCallback: Function,
  errorCallback: Function
) => {
  $axios
    .get(endPoint + params, {})
    .then((res: any) => {
      successCallback(res);
    })
    .catch((err: any) => {
      if (err.code === "ERR_NETWORK") {
        errorCallback({
          statusCode: "",
          message: err.message,
        });
      } else if (err.code === "ECONNABORTED") {
        errorCallback({
          data: {
            statusCode: 408,
          },
        });
      } else if (err.response) {
        errorCallback(err.response.data);
      } else if (!err.response) {
        errorCallback({
          data: {
            statusCode: "",
            message: "Please try again later",
          },
        });
      }
    });
};

export { getApiCall };
