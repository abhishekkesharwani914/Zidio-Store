import { AsyncHandler } from "../Utils/AsyncHandler";
import { axiosInstance } from "../Utils/AxiosInstance";

export const getUserData = async (userId) => {
  const [response, error] = await AsyncHandler(() =>
    axiosInstance.post(`/user/data`, { userId })
  );
  return [response?.data, error];
};
export const updateUser = async (data) => {
  const [response, error] = await AsyncHandler(() =>
    axiosInstance.put(`/user/update`, data)
  );
  return [response?.data, error];
};
export const deleteUser = async (id) => {
  const [response, error] = await AsyncHandler(() =>
    axiosInstance.delete(`/user/delete`, { data: { id } })
  );
  return [response?.data, error];
};
