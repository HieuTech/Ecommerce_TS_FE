import React, { useEffect, useState } from "react";

import "./Checkout.scss";
import { useNavigate } from "react-router-dom";

function Orders() {
//   const navigate = useNavigate();
//   const handleSubmit = (e: FormData) => {
//     e.preventDefault();
//     console.log("ok");
//     navigate("/order-received");
//   };
  return (
    <div className="orders-container">
      <div className="form-container">
        <h2>Customer Information</h2>
        <form >
          <div className="error-message"></div>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" />
          <div>
            <div className="error-message"></div>

            <label>Phone Number:</label>
            <input type="tel" />
          </div>
          <div>
            <div className="error-message"></div>

            <label>Address:</label>
            <input type="text" />
          </div>
          <div className="bank">
            <div className="bank-item">
              <label htmlFor="momo">
                <img
                  src="https://img.mservice.com.vn/app/img/portal_documents/mini-app_design-guideline_branding-guide-2-2.png"
                  alt="momo"
                  className="bank-img momo"
                />
              </label>
              <input
                type="radio"
                name="bank-brand"
                className="bank-input momo"
                id="momo"
                value="momo"
              />
            </div>

            <div className="bank-item">
              <label htmlFor="vietcombank">
                <img
                  src="https://inkythuatso.com/uploads/thumbnails/800/2021/09/logo-vietcombank-inkythuatso-10-10-45-11.jpg"
                  alt="vietcombank"
                  className="bank-img"
                />
              </label>
              <input
                type="radio"
                name="bank-brand"
                className="bank-input vietcombank"
                id="vietcombank"
                value="vietcombank" // Đặt giá trị cho radio button này
              />
            </div>
          </div>

          <div className="error-message"></div>

          <div className="order-summary">
            <h2>Order Summary</h2>

            <p className="totalPrice">Total Price: </p>
          </div>

          <button className="btn" type="submit">
            Đặt Hàng
          </button>
        </form>
      </div>
    </div>
  );
}

export default Orders;
