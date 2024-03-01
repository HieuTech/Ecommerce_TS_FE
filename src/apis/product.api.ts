import axios from "axios";

const prefix = "products";

export const productApi = {
  getAllProduct: async () => {
    return await axios.get(`${import.meta.env.VITE_SERVER}/${prefix}`);
  },

  getProductByPage: async (_page: number, _per_page: number) => {
    return await axios.get(
      `${
        import.meta.env.VITE_SERVER
      }/${prefix}?_page=${_page}&_per_page=${_per_page}`
    );
  },
  sortByPrice: async (price: string) => {
    return await axios.get(
      `${import.meta.env.VITE_SERVER}/${prefix}?_sort=${price}`
    );
  },
  sortOnSale: async (isOnSale: number) => {
    return await axios.get(
      `${import.meta.env.VITE_SERVER}/${prefix}?on_sale=${isOnSale}`
    );
  },
  sortByRating: async (rating: number) => {
    return await axios.get(
      `${import.meta.env.VITE_SERVER}/${prefix}?rating_gte=${rating}`
    );
  },

  searchByName: async (name: string) => {
    return await axios.get(
      `${import.meta.env.VITE_SERVER}/${prefix}?name=${name}`
    );
  },
  postProduct: async (data: { name: string; price: number; img: string }) => {
    return await axios
      .post(`${import.meta.env.VITE_SERVER}/${prefix}`, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  },
  deleteProduct: async (id: number) => {
    return await axios
      .delete(`${import.meta.env.VITE_SERVER}/${prefix}/${id}`)
      .then((res) => {
        console.log("resDel", res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  },
};
