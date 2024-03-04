import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import React, { ChangeEvent, useEffect, useState } from "react";
import "./Shop.scss";
import apis from "../../apis";
import Pagination from "./components/Pagination";
import "font-awesome/css/font-awesome.min.css";
import { uploadFileToStorage } from "../../firebase/index.ts";
import ShopProduct from "./components/ShopProduct.tsx";

import { Product } from "../../apis/product.api.ts";

const Shop = () => {
  const [listProduct, setListProduct] = useState<Product[]>([]);
  const [price, setPrice] = useState("price");
  // const [folderName, setFolderName] = useState("");
  const [isActiveCategories, setIsActiveCategories] = useState("");
  const [isActiveOnSale, setIsActiveOnSale] = useState(false);
  const [isActiveOnBestSeller, setIsActiveOnBestSeller] = useState(false);

  //handleSort
  const handleSort = async (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    console.log("value", value);

    try {
      const res = await apis.productApi.sortByPrice(value);
      // console.log("res",res);
      setListProduct(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  //handBestSeller
  const handleBestSeller = async (value: boolean) => {
    setIsActiveOnBestSeller(value);
    setIsActiveOnSale(!value);
    try {
      const res = await apis.productApi.sortByRating(4);
      setListProduct(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  //handleSearch
  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const value = e.target.value;
      console.log("res", value);

      try {
        const res = await apis.productApi.searchByName(value);
        setListProduct(res.data);
      } catch (error) {
        console.log("error", error);
      }
    }
  };
  //searchByCategories
  const searchByCategories = async (name: string) => {
    setIsActiveCategories(name);
    // setFolderName(name);

    try {
      const res = await apis.categoriesApi.getCategoriesByName(name);
      const data = res.data[0].products;
      
    setListProduct(data);

    } catch (error) {
      console.log("error", error);
    }
  };

  //handleOnSale
  const handleOnSale = async (value: boolean) => {
    const isOnSale = 1;
    setIsActiveOnSale(value);
    setIsActiveOnBestSeller(!value);
    try {
      const res = await apis.productApi.sortOnSale(isOnSale);
      setListProduct(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  //handleUploadFileBase

  // const uploadFile = async (e: any) => {
  //   const localFile = e.target.files[0];
  //   const urlFirebase = await uploadFileToStorage(localFile, folderName);
  //   console.log("folderName", folderName);

  //   console.log("urlFirebase", urlFirebase);
  // };

  return (
    <>
      <Header />

      <h3 className="shop-title">ORDER ONLINE</h3>
      {/* <div>
        <label htmlFor="">Upload file </label>
        <input type="file" onChange={uploadFile} />
      </div> */}
      <div className="category">
        <h1
          className={`shop-pizza ${
            isActiveCategories == `${import.meta.env.VITE_CATEGORIES_PIZZA}`
              ? "active_categories"
              : ""
          }`}
          onClick={() => {
            searchByCategories(`${import.meta.env.VITE_CATEGORIES_PIZZA}`);
          }}
        >
          PIZZA
        </h1>
        <h1
          className={`shop-cake ${
            isActiveCategories == `${import.meta.env.VITE_CATEGORIES_CAKE}`
              ? "active_categories"
              : ""
          }`}
          onClick={() => {
            searchByCategories(`${import.meta.env.VITE_CATEGORIES_CAKE}`);
          }}
        >
          CAKE
        </h1>
        <h1
          className={`shop-vegan ${
            isActiveCategories == `${import.meta.env.VITE_CATEGORIES_VEGAN}`
              ? "active_categories"
              : ""
          }`}
          onClick={() => {
            searchByCategories(`${import.meta.env.VITE_CATEGORIES_VEGAN}`);
          }}
        >
          GREENS
        </h1>
        <h1
          className={`shop-beverage ${
            isActiveCategories == `${import.meta.env.VITE_CATEGORIES_BEVERAGE}`
              ? "active_categories"
              : ""
          }`}
          onClick={() => {
            searchByCategories(`${import.meta.env.VITE_CATEGORIES_BEVERAGE}`);
          }}
        >
          BEVERAGE
        </h1>
      </div>
      <div className="sort">
        <span className="sort_title">Sort By</span>
        <button
          className={`btn_sort ${
            isActiveOnBestSeller ? "active_on_best_seller" : ""
          }`}
          onClick={() => {
            handleBestSeller(true);
          }}
        >
          Best Seller
        </button>
        <button
          className={`btn_sort ${isActiveOnSale ? "active_on_sale" : ""}`}
          onClick={() => {
            handleOnSale(true);
          }}
        >
          On Sale
        </button>
        <select name="price" id="" className="sort_price" onChange={handleSort}>
          <option value="">Price</option>
          <option value={price}>High To Low</option>
          <option value={`-${price}`}>Low To High</option>
        </select>
        <div className="shop_search">
          <input
            type="text"
            placeholder="Search...."
            className="shop_search_input"
            autoFocus
            onKeyDown={handleSearch}
          />
        </div>
      </div>

      <ShopProduct listProduct={listProduct} />

      <Pagination setListProduct={setListProduct} listProduct={listProduct} />

      <hr />
      <Footer />
    </>
  );
};

export default Shop;
