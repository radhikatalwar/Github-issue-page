import axios from "axios";

export const $axios = axios.create({
  baseURL: "",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    Authorization: "token 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",
  },
});
