import { AsyncHandler } from "../Utils/AsyncHandler";
import { axiosInstance } from "../Utils/AxiosInstance";

export const userLogin = async (data) => {
  const [response, error] = await AsyncHandler(() =>
    axiosInstance.post(`/user/auth/login`, data, {
      withCredentials: true,
    })
  );
  return [response, error];
};
export const userRegister = async (data) => {
  const [response, error] = await AsyncHandler(() =>
    axiosInstance.post(
      `${import.meta.env.VITE_SERVER_URL}/user/auth/register`,
      data
    )
  );
  return [response?.data, error];
};
export const userData = async (data) => {
  const [response, error] = await AsyncHandler(() =>
    axiosInstance.post(
      `${import.meta.env.VITE_SERVER_URL}/user/auth/register`,
      data
    )
  );
  return [response?.data, error];
};
