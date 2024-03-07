import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.scss";

import "font-awesome/css/font-awesome.min.css";

import { StoreType } from "../../Stores";
import apis from "../../apis";

const Cart = () => {
  const [cart, setCart] = useState();
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  const userData = useSelector((store: StoreType) => store.userReducer);

  const [inActiveButton, setInActiveButton] = useState(false);
  const userEmail = userData.data?.data;

  const handleIncrease = async (cartItem) => {
    const updatedCart = cart?.map((item) => {
      if (item.product_id == cartItem.product_id) {
        const updatedQuantity = Number(item.quantity) + 1;
        const newTotalPrice = cartItem.price_sale
          ? cartItem.price_sale * updatedQuantity
          : cartItem.price * updatedQuantity;

        return {
          ...item,
          quantity: updatedQuantity,
          total_price: newTotalPrice,
        };
      }
      return item;
    });

    setCart(updatedCart);
    console.log("update", updatedCart);

    const dataUpdateCartApi = {
      id: userData.data?.data.id,
      cart: updatedCart,
    };

    try {
      const res = await apis.userApi.updateUser(dataUpdateCartApi);
      
    } catch (error) {
      console.log("error", error);
    }
  };
  //-----------
  const handleDecrease = async (cartItem) => {
    const updatedCart = cart?.map((item) => {
      if (item.product_id == cartItem.product_id) {
        const updatedQuantity = Number(item.quantity) - 1;
        const newTotalPrice = cartItem.price_sale
          ? cartItem.price_sale * updatedQuantity
          : cartItem.price * updatedQuantity;
        console.log("cartQuantitty", inActiveButton);
        // console.log("item");
      
        if (item.quantity <= 1) {
          setInActiveButton(true);
        }
        
        return {
          ...item,
          quantity: updatedQuantity,
          total_price: newTotalPrice,
        };
      }

      return item;


    });

    setCart(updatedCart);
    console.log("update", updatedCart);

    const dataUpdateCartApi = {
      id: userData.data?.data.id,
      cart: updatedCart,
    };

    try {
      const res = await apis.userApi.updateUser(dataUpdateCartApi);
      console.log("res update cart", res.data);
      
    } catch (error) {
      console.log("error", error);
    }

  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await apis.userApi.getUserByEmail(userEmail.email);
        setCart(res.data[0].cart);
        if (userData?.status == 500) {
          // window.location.href = "/";
        }
        console.log("datacheck", res.data[0].cart);

        let totalPrice = 0;
        res.data[0].cart?.forEach((item) => {
          totalPrice += item?.total_price;
          setCartTotalPrice(Math.ceil(totalPrice));
        });
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Shopping Cart</h2>
      <ul className="cart-list">
        {cart?.map((cartItem, index: number) => {
          return (
            <li className="cart-item" key={index}>
              <div className="cart-info">
                <img
                  className="cart-item-image"
                  src={cartItem.img}
                  alt="hinh anh"
                />
                <div>
                  <p className="cart-product-name">{cartItem.name}</p>
                </div>
              </div>
              <div className="quantity">
                <button className="increment">
                  <i
                    className="fa fa-plus"
                    onClick={() => {
                      handleIncrease(cartItem);
                    }}
                  ></i>
                </button>
                <span className="cart-quantity">{cartItem.quantity}</span>
                <button className="decrement" disabled={inActiveButton}>
                  <i
                    className="fa fa-minus"
                    onClick={() => {
                      handleDecrease(cartItem);
                    }}
                  ></i>
                </button>
              </div>
              <div className="cart-item-price">
                <span className="cart-price">
                  ${cartItem.price_sale ? cartItem.price_sale : cartItem.price}
                </span>
                <button className="remove">
                  <i className="fa fa-remove"></i>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="cart-check">
        <Link to="/checkout" className="go-to-orders-link">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
