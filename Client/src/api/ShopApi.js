import { AsyncHandler } from "../Utils/AsyncHandler";
import { axiosInstance } from "../Utils/AxiosInstance";

export const shopItems = async () => {
  const [response, error] = await AsyncHandler(() =>
    axiosInstance.get(`/shop/`)
  );
  return [response?.data, error];
};
export const Item = async (id) => {
  const [response, error] = await AsyncHandler(() =>
    axiosInstance.get(`/shop/${id}`)
  );
  return [response?.data, error];
};