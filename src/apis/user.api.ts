import axios from "axios";
import { Product } from "./product.api";
import { UserMessageStatus } from "./const/admin.const";
import utils from "../utils";
import { ReceiptStatus } from "./receipt.api";
const prefix = "users";

export enum UserStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export interface User {
  userName: string;
  email: string;
  password: string;
  created_at: Date;
  cart: Product[];
  avatar: string;
  status: UserStatus
}

export const userApi = {
  getUser: async () => {
    return await axios.get(`${import.meta.env.VITE_SERVER}/${prefix}`);
  },
  getUserByEmail: async (email: string) => {
    return await axios.get(
      `${import.meta.env.VITE_SERVER}/${prefix}?email=${email}`
    );
  },
  userLogin: async (data: { id: string; email: string; password: string }) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER}/${prefix}?email=${data.email}`
      );

      const adminLogin = res?.data[0];

      if (!adminLogin) {
        throw {
          message: UserMessageStatus.err_user_not_found,
        };
      }

      if (adminLogin.password !== data.password) {
        throw {
          message: UserMessageStatus.err_user_account_invalid,
        };
      }

      return {
        status: 200,
        data: await utils.jwt.generateToken(data),
        message: UserMessageStatus.success_user_login,
      };
    } catch (error) {
      return {
        status: 500,
        message: error.message,
      };
    }
  },

  authen: async (token: string) => {
    try {
      const data = await utils.jwt.verifyToken(token);

      if (!data) {
        throw {
          message: "Token Invalid",
        };
      }
      return {
        status: 200,
        data,
        message: "Xac thuc thanh cong",
      };
    } catch (error) {
      return {
        status: 500,
        message: error.message,
      };
    }
  },

  userSignUp: async (data: User) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER}/${prefix}?email=${data.email}`
      );

      const checkUser = res.data[0];

      if (checkUser) {
        throw {
          message: UserMessageStatus.err_user_exist,
        };
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        throw {
          message: UserMessageStatus.err_user_account_invalid,
        };
      }

      if (data.password.length < 6) {
        throw {
          message: UserMessageStatus.err_user_account_invalid,
        };
      }

      const resUserAdd = await axios.post(
        `${import.meta.env.VITE_SERVER}/${prefix}`,
        data
      );
      return {
        status: 200,
        data: resUserAdd.data,
        message: UserMessageStatus.success_user_sign_up,
      };
    } catch (error) {
      return {
        status: 400,
        message: error.message,
      };
    }
  },

  postUser: async (data: User) => {
    return await axios.post(`${import.meta.env.VITE_SERVER}/${prefix}`, data);
  },

  blockUser: async (data: { id: string; status: string }) => {
    return await axios.patch(
      `${import.meta.env.VITE_SERVER}/${prefix}/${data.id}`,
      data
    );
  },

  updateUser: async (data: { id: string; cart: any[] }) => {
    return await axios.patch(
      `${import.meta.env.VITE_SERVER}/${prefix}/${data.id}`,
      data
    );
  },
  updateStatusUser: async (data: { id: string; user_status: UserStatus }) => {
    return await axios.patch(
      `${import.meta.env.VITE_SERVER}/${prefix}/${data.id}`,
      data
    );
  },

  updateUserReceiptStatus: async (data: {
    id: string;
    receipt_id: string;
    status: ReceiptStatus;
  }) => {
    return await axios.patch(
      `${import.meta.env.VITE_SERVER}/${prefix}/${data.id}`,
      data
    );
  },

  deleteUser: async (id: number) => {
    return await axios.post(`${import.meta.env.VITE_SERVER}/${prefix}/${id}`);
  },
};
