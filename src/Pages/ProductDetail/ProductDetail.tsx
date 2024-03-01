import React, { useEffect, useState } from "react";
import "./ProductDetail.scss";
import Header from "../../Components/Header/Header";
import { useNavigate } from "react-router-dom";

import SocialMedia from "../Home/SocialMedia";
import { useSelector } from "react-redux";
import apis from "../../apis";
import AnotherProduct from "./components/AnotherProduct";

interface ProductDetail {
  id: number;
  name: string;
  price: number;
  on_sale: true;
  img: string;
  rating: number;
  description: string;
}

export default function ProductDetail() {
  const { id, categoriesList } = useSelector(
    (store) => store.categoriesReducer
  );

  const [productDetail, setProductDetail] = useState<ProductDetail | null>(
    null
  );
  const navigate = useNavigate();

  const [showCategories, setShowCategories] = useState({});

  const [mainImage, setMainImage] = useState(
    "https://plus.unsplash.com/premium_photo-1668698355395-60cd173f121b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNha2V8ZW58MHx8MHx8fDA%3D"
  );
  const handleSubImageClick = (newSrc: any) => {
    setMainImage(newSrc);
  };
  console.log("id", id);
  console.log("cate", categoriesList);
  

  useEffect(() => {
    categoriesList.forEach((categories: any) => {
      categories.products.forEach((product: ProductDetail) => {
        if (product.id == id) {
          setProductDetail(product);
          setShowCategories(categories);
        }
      });
    });
  }, [categoriesList]);
    
  

  return (
    <div>
      <Header />

      <div className="detail-container">
        {/* detail-header */}
        <p className="product-detail-header">
          *Category: {showCategories?.name}
        </p>

        <div className="detail-grid">
          <div className="grid-item">
            <div className="detail-sub-img">
              <img
                className="sub-img"
                src="https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="hinh anh"
                onClick={() => {
                  handleSubImageClick(
                    "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  );
                }}
              />
              <img
                className="sub-img"
                src="https://plus.unsplash.com/premium_photo-1690214491960-d447e38d0bd0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNha2V8ZW58MHx8MHx8fDA%3D"
                alt="hinh anh"
                onClick={() => {
                  handleSubImageClick(
                    "https://plus.unsplash.com/premium_photo-1690214491960-d447e38d0bd0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNha2V8ZW58MHx8MHx8fDA%3D"
                  );
                }}
              />
              <img
                className="sub-img"
                src="https://plus.unsplash.com/premium_photo-1668698355395-60cd173f121b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNha2V8ZW58MHx8MHx8fDA%3D"
                alt="hinh anh"
                onClick={() => {
                  handleSubImageClick(
                    "https://plus.unsplash.com/premium_photo-1668698355395-60cd173f121b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNha2V8ZW58MHx8MHx8fDA%3D"
                  );
                }}
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
                    handleAddToCart(event);
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* detail-content */}
      </div>
      <AnotherProduct
        showCategories={showCategories}
        setProductDetail={setProductDetail}
      />

      <SocialMedia />
    </div>
  );
}
