import { GetAxiosInstance } from "@axios/axios.method";

export const getProfile = async () => {
  try {
    const res = await GetAxiosInstance(`/profile`);

    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
