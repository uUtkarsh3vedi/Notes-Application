import axios from "axios"
import { BASE_URL } from "../constants";

export const registerUser = async (userData) => {
  const res = await axios.post(`${BASE_URL}/users`, userData, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  return res.data;
};
