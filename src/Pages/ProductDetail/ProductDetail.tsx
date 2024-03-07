import React, { useEffect, useRef, useState } from "react";
import "./ProductDetail.scss";
import Header from "../../Components/Header/Header";
import { useParams } from "react-router-dom";

import SocialMedia from "../Home/SocialMedia";
import apis from "../../apis";
import AnotherProduct from "./components/AnotherProduct";
import { Product } from "../../apis/product.api";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "../../Stores";
import { UserDataAction } from "../../Stores/Slice/UserData.slice";
import { message } from "antd";

export default function ProductDetail() {
  const [productDetail, setProductDetail] = useState<Product | null>(null);

  //useParam
  const { id } = useParams();
  const [quantityProduct, setQuantityProduct] = useState(1);
  const [showCategories, setShowCategories] = useState<Product[]>([]);
  const userDataStore = useSelector(
    (store: StoreType) => store.UserDataReducer
  );
  const UserData = userDataStore.data?.cart;

  const dispatch = useDispatch();

  const handleAddToCart = (product_id: number | undefined) => {
    const updatedUserDataCart = UserData?.map((cart) => {
      console.log("cart", cart);

      if (cart.product_id == product_id) {
        const updatedQuantity = Number(cart.quantity) + Number(quantityProduct);
        const updatedTotalPrice =
          updatedQuantity * (cart.price_sale ? cart.price_sale : cart.price);
        message.success("Cập nhật giỏ hàng thành công");

        return {
          ...cart,
          quantity: updatedQuantity,
          total_price: updatedTotalPrice,
        };
      }
      return cart;
    });

    // Check if the product_id was not found in the cart

    const isNewItem = !updatedUserDataCart?.some(
      (cart) => cart.product_id == product_id
    );
    if (isNewItem) {
      const newItem = {
        id: "" + Math.ceil(Math.random() * Date.now()),
        name: productDetail?.name,
        price_sale: productDetail?.price_sale,
        img: productDetail?.img,
        price: productDetail?.price,
        product_id: product_id,
        quantity: quantityProduct,
        total_price:
          quantityProduct *
          (productDetail?.price_sale
            ? productDetail.price_sale
            : productDetail.price),
      };

      updatedUserDataCart?.push(newItem);
      message.success("Thêm vào giỏ hàng thành công");

      console.log("updatedUserDataCart", updatedUserDataCart);
    }
    const updateCart = {
      id: userDataStore.data?.id,
      cart: updatedUserDataCart,
    };

    apiUpdate(updateCart);
    dispatch(UserDataAction.setCart(updatedUserDataCart));
    console.log("update", updatedUserDataCart);

   
    setTimeout(() => {
      window.location.href = `/product-detail/${id}`;
    }, 700);

    //API Update Cart
  };

  const apiUpdate = async (updateCart) => {
    try {
      await apis.userApi.updateUser(updateCart);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    const fetchByProductId = async () => {
      try {
        const resProductId = await apis.productApi.getProducById(id as string);
        setProductDetail(resProductId.data);

        const getAllProduct = await apis.productApi.getAllProduct();

        //ko kip filter
        const productList = getAllProduct.data?.filter((product: Product) => {
          return product.categories_id == resProductId.data.categories_id;
        });

        setShowCategories(productList);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchByProductId();
  }, []);
  return (
    <div>
      <Header />
      <div className="detail-container">
        {/* detail-header */}
        <p className="product-detail-header"></p>

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
              <span className="item-price">
                $
                {productDetail?.price_sale
                  ? productDetail?.price_sale
                  : productDetail?.price}
              </span>
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
                onChange={(event) => {
                  setQuantityProduct((event.target as any).value);
                }}
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
