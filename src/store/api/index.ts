import axios from 'axios';
import { Product } from '../todo/action';

const BASE_URL = 'http://localhost:5000'; // địa chỉ server

export const createProduct = async (title: string): Promise<Product> => {
  try {
    const response = await axios.post(`${BASE_URL}/posts`, { title });
    // console.log("Create_OK")
    return response.data;
  } catch (error:any) {
    // console.log("No")
     throw new Error(error.response?.data?.message ?? 'Unknown error');
     
  }
};

export const fetchProduct = async (): Promise<Product> => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`);
     console.log("Get_OK",response.data)
    return response.data;
  } catch (error:any) {
    // console.log("No")
     throw new Error(error.response?.data?.message ?? 'Unknown error');
     
  }
};
