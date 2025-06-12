import { AsyncHandler } from "../Utils/AsyncHandler";
import { axiosInstance } from "../Utils/AxiosInstance";

export const getCart = async (userId) => {
  const [response, error] = await AsyncHandler(() =>
    axiosInstance.post(`/cart/`, { userId })
  );
  return [response?.data, error];
};

export const addCartItem = async (id, userId) => {
  const [response, error] = await AsyncHandler(() =>
    axiosInstance.post(`/cart/${id}`, { userId })
  );
  return [response?.data, error];
};

export const deleteCartItem = async (id, userId) => {
  const [response, error] = await AsyncHandler(() =>
    axiosInstance.delete(`/cart/${id}`, { userId })
  );
  return [response?.data, error];
};
