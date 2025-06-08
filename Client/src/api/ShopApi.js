import { AsyncHandler } from "../Utils/AsyncHandler";
import { axiosInstance } from "../Utils/AxiosInstance";

export const shopItems = async () => {
  const [response, error] = await AsyncHandler(() =>
    axiosInstance.get(`/items/`)
  );
  return [response?.data, error];
};
export const Item = async (id) => {
  const [response, error] = await AsyncHandler(() =>
    axiosInstance.get(`/items/${id}`)
  );
  return [response?.data, error];
};

export const addReview = async (id, review) => {
  const [response, error] = await AsyncHandler(() =>
    axiosInstance.post(`/shop/${id}/review`, review)
  );
  return [response?.data, error];
};
export const deleteReview = async (id, reviewId) => {
  const [response, error] = await AsyncHandler(() =>
    axiosInstance.delete(`/shop/${id}/review/${reviewId}`)
  );
  return [response?.data, error];
};
