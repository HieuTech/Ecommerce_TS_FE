
import axios from "axios"

const prefix = "receipt"


export const receiptApi = {
    getAllReceipt: async () =>{
        return await axios.get(`${import.meta.env.VITE_SERVER}/${prefix}`)
    },
    getReceiptByUserId: async (userId: number)=>{
        return await axios.get(`${import.meta.env.VITE_SERVER}/${prefix}?user_id=${userId}`)
    },
    updateReceiptApprove: async (data:{
        receipt_id: number,
        approved: boolean
    })=>{
        return await axios.patch(
          `${import.meta.env.VITE_SERVER}/${prefix}/${data.receipt_id}`,data.approved
        );
    }
}