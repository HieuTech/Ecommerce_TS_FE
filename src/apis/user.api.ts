import axios from "axios";

const prefix = "users"

enum UserStatus {
    ACTIVE,
    INACTIVE
}

export const userApi = {
    getUser: async()=>{
        return await axios.get(`${import.meta.env.VITE_SERVER}/${prefix}`);
    },
    postUser: async(data: {
        userName: string,
        password: string,
        created_at? : Date,
        cart?: [],
        status?: UserStatus,
        Recept?: []
    })=>{
        return await axios.post(`${import.meta.env.VITE_SERVER}/${prefix}`,data)
    }
}