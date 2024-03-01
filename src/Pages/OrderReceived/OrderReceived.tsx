import "./OrderReceived.scss";
import React from "react";
import "./OrderReceived.scss"; // Đã thêm className
import { useNavigate } from "react-router-dom";

function OrderReceived() {
  const navigate = useNavigate();
  // Static data for demonstration
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="order-received-container">
      <h2>Order Successfully Placed</h2>
      <p>Thank you for your order.</p>
      <p>Order will be delivered to: </p>
      <h3>Order Details:</h3>
      <ul className="cart-items"></ul>
      <p className="cart-item-price">Giá: </p>

      <button
        className="btn-order-received"
        onClick={() => {
          handleClick();
        }}
      >
        Go to Home Page
      </button>
    </div>
  );
}

export default OrderReceived;
