
import axios from "axios"
const prefix = "categories"

export const categoriesApi = {
    getCategoriesByName : async (name: string) =>{
        return await axios.get(`${import.meta.env.VITE_SERVER}/${prefix}?name=${name}`);
    },
    getAllCategories: async () =>{
        return await axios.get(`${import.meta.env.VITE_SERVER}/${prefix}`)
    }
}