import axios from "axios";
import { API_URL } from "./config";

export const getCurrency = async () => {
  try {

    const response = await axios.get(`${API_URL}&symbols=EUR`);
    return response
    

  } catch (error) {
    throw error;
  }
};

export const addCurrency = async (curr) => {
  try {
    let params = ''
    params = `,${curr.join(',')}`

    const response = await axios.get(`${API_URL}&symbols=EUR,${params}`);
    return response
  } catch (error) {
    throw error;
  }
}