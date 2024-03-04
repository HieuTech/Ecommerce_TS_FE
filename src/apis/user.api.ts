import axios from "axios";
import { Product } from "./product.api";
const prefix = "users"

export enum UserStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}

export interface User {
  userName: string;
  password: string;
  created_at: Date;
  cart: Product[];
  avatar: string;
  status: UserStatus;
  receipt_id: string;
}

export const userApi = {
  getUser: async () => {
    return await axios.get(`${import.meta.env.VITE_SERVER}/${prefix}`);
  },

  postUser: async (data: User) => {
    return await axios.post(`${import.meta.env.VITE_SERVER}/${prefix}`, data);
  },

  blockUser: async (data: { id: number; status: string }) => {
    return await axios.patch(
      `${import.meta.env.VITE_SERVER}/${prefix}/${data.id}`,
      data
    );
  },

  updateUser: async (data: {
    id: number;
    userName: string;
    avatar: string;
  }) => {
    return await axios.post(
      `${import.meta.env.VITE_SERVER}/${prefix}/${data.id}`,
      data
    );
  },
  deleteUser: async (id: number) => {
    return await axios.post(`${import.meta.env.VITE_SERVER}/${prefix}/${id}`);
  },
};