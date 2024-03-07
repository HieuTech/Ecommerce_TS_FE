import axios from "axios";

const prefix = "receipt";
export enum ReceiptStatus {
  PENDING = "pending",
  SHIPPING = "shipping",
  APPROVED = "approved",
  CANCEL = "cancel",
}
interface Receipt {
  id: string;
  created_at: Date;
  userName: string;
  phoneNumber: string;
  address: string;
  payment_method: string;
  status: ReceiptStatus;
  total_price: number;
  product: [];
  user_id: string;
}

export const receiptApi = {
  getAllReceipt: async () => {
    return await axios.get(`${import.meta.env.VITE_SERVER}/${prefix}`);
  },

  postReceipt: async (data: Receipt) => {
    return await axios.post(`${import.meta.env.VITE_SERVER}/${prefix}`, data);
  },
  getReceiptByUserId: async (userId: number) => {
    return await axios.get(
      `${import.meta.env.VITE_SERVER}/${prefix}?user_id=${userId}`
    );
  },
  updateReceiptApprove: async (data: {
    receipt_id: number;
    approved: boolean;
  }) => {
    return await axios.patch(
      `${import.meta.env.VITE_SERVER}/${prefix}/${data.receipt_id}`,
      data.approved
    );
  },
};
