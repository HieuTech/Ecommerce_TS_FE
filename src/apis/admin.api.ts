import axios from "axios"
import { AdminMessageStatus } from "./const/admin.const";
import utils from "../utils";
const prefix = "admin"

export const adminApi = {

    login: async (data:{
        email: string,
        password: string
    }) =>{
        try {
            const res = await axios.get(`${import.meta.env.VITE_SERVER}/${prefix}?email=${data.email}`);
            console.log("res admin api",res.data[0]);
            const adminLogin = res?.data[0]
            
            if(!adminLogin){
                throw{
                    message: AdminMessageStatus.err_admin_not_found
                }
            }

            if(data.password !== adminLogin.password){
                throw {
                  message: AdminMessageStatus.err_admin_account_invalid
                };
            }
            return {
              status: 200,
              data: await utils.jwt.generateToken(adminLogin),
              message: AdminMessageStatus.success_admin_login
            };


        } catch (error) {
            return {
                status: 500,
                message: error.message
            }
            
        }

    },
    authen: async (token: string) =>{
        try {
            const data = await utils.jwt.verifyToken(token)
            if(!data){
                throw {
                    message: AdminMessageStatus.err_admin_account_invalid}
            }
            return {
                status: 200,
                message: AdminMessageStatus.success_admin_login

            }

        } catch (error) {
            return {
                status: 500,
                message: error.message
            }
        }
    }
}