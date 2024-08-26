import axios, { AxiosError } from "axios";

function getError(error: any) {
  if (error instanceof AxiosError) {
    return error.response?.data.error;
  }

  return "Não foi possível realizar a operaçao";
}

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

export { api, getError };
