import React, { useEffect, useState } from "react";
import "./ProductDetail.scss";
import Header from "../../Components/Header/Header";
import {  useParams } from "react-router-dom";

import SocialMedia from "../Home/SocialMedia";
import apis from "../../apis";
import AnotherProduct from "./components/AnotherProduct";
import { Product } from "../../apis/product.api";





export default function ProductDetail() {
 
  const [productDetail, setProductDetail] = useState<Product | null>(null);
  // const navigate = useNavigate();

  //useParam
  const { id } = useParams();
  console.log("id", typeof id);

  const [showCategories, setShowCategories] = useState < Product[]>([]);

  useEffect(() => {
   
    const fetchByProductId = async () => {
      try {
        const resProductId = await apis.productApi.getProducById(id as string);
        console.log("res", resProductId.data);
        setProductDetail(resProductId.data);

        const getAllProduct = await apis.productApi.getAllProduct();
        console.log("getAll", getAllProduct.data);

        //ko kip filter
        const productList = getAllProduct.data?.filter((product: Product) => {
          return product.categories_id == resProductId.data.categories_id;
        });

        setShowCategories(productList);

        console.log("productList", showCategories);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchByProductId();
  }, []);


  const handleAddToCart = (id: number| undefined) =>{
    console.log("id",id);
    
  };
  return (
    <div>
      <Header />
      <div className="detail-container">
        {/* detail-header */}
        <p className="product-detail-header">
        </p>

        <div className="detail-grid">
          <div className="grid-item">
            <div className="detail-sub-img">
              <img
                className="sub-img"
                src="https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="hinh anh"
               
              />
              <img
                className="sub-img"
                src="https://plus.unsplash.com/premium_photo-1690214491960-d447e38d0bd0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNha2V8ZW58MHx8MHx8fDA%3D"
                alt="hinh anh"
              
              />
              <img
                className="sub-img"
                src="https://plus.unsplash.com/premium_photo-1668698355395-60cd173f121b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNha2V8ZW58MHx8MHx8fDA%3D"
                alt="hinh anh"
                
              />
            </div>
          </div>
          <div className="grid-item">
            <div className="detail-main-img">
              <img
                className="main-img"
                src={productDetail?.img}
                alt="hinh anh"
              />
            </div>
          </div>
          <div className="grid-item">
            <div className="detail-content">
              <h1 className="title">{productDetail?.name}</h1>
              <span className="item-price">${productDetail?.price}</span>
              <p className="item-desc">
                A spicy collaboration with Daring 🔥
                <p>{productDetail?.description}</p>
                <p>6 - 14 OZ (397 G) PIZZAS NET WT. 84 OZ (2382 G)</p>
              </p>
              <label className="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="30"
                defaultValue={1}
              />

              <div className="btn">
                <button
                  className="add-to-cart"
                  onClick={() => {
                    handleAddToCart(productDetail?.id);
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
      {showCategories.length > 0 && (
        <AnotherProduct
          showCategories={showCategories}
          setProductDetail={setProductDetail}
        />
      )}
      <SocialMedia />
    </div>
  );
}
