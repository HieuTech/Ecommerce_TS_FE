import axios from "axios";

const prefix = "users"

enum UserStatus {
    ACTIVE,
    INACTIVE
}

export const userApi = {
  getUser: async () => {
    return await axios.get(`${import.meta.env.VITE_SERVER}/${prefix}`);
  },
  postUser: async (data: {
    userName: string;
    password: string;
    created_at?: Date;
    cart: [];
    avatar: string,
    status: UserStatus;
    receipt_id:0
  }) => {
    return await axios.post(`${import.meta.env.VITE_SERVER}/${prefix}`, data);
  },
   updateUser: async(data: {
        userName: string,
        avatar:string
    })=>{
        return await axios.post(`${import.meta.env.VITE_SERVER}/${prefix}`,data)
    },
  deleteUser: async (id: number) => {
    return await axios.post(`${import.meta.env.VITE_SERVER}/${prefix}/${id}`);
  },
};