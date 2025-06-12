import { AsyncHandler } from "../Utils/AsyncHandler";
import { axiosInstance } from "../Utils/AxiosInstance";

export const wishlistItems = async (userId) => {
  const [response, error] = await AsyncHandler(() =>
    axiosInstance.post(`/wishlist/`, { userId })
  );
  return [response?.data, error];
};

export const addWishlistItem = async (id, userId) => {
  const [response, error] = await AsyncHandler(() =>
    axiosInstance.post(`/wishlist/${id}`, { userId })
  );
  return [response?.data, error];
};

export const deleteWishlistItem = async (id, userId) => {
  const [response, error] = await AsyncHandler(() =>
    axiosInstance.delete(`/wishlist/${id}`, { userId })
  );
  return [response?.data, error];
};
