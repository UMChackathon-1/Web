import axios from "axios";

export const getProfile = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/profile`);

    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
