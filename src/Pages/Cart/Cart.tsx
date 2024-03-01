import React from "react";
import { Link } from "react-router-dom";
import "./Cart.scss";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Shopping Cart</h2>
      <ul className="cart-list">
        <li className="cart-item">
          <div className="cart-info">
            <img
              className="cart-item-image"
              src="https://plus.unsplash.com/premium_photo-1672363353886-a106864f5cb9?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="hinhanh"
            />
            <div>
              <p>(NEW) PEPPERONI PIZZA (CASE OF 6)</p>
              <span>PACK SIZE: 6</span>
            </div>
          </div>
          <div className="quantity">
            <button className="increment">
              <i className="fa fa-plus"></i>
            </button>
            <span className="cart-quantity">2</span>
            <button className="decrement">
              <i className="fa fa-minus"></i>
            </button>
          </div>
          <div className="cart-item-price">
            <span className="cart-price">$155</span>
            <button className="remove">
              <i className="fa fa-remove"></i>
            </button>
          </div>
        </li>
        <hr />
        <li className="cart-item">
          <div className="cart-info">
            <img
              className="cart-item-image"
              src="https://plus.unsplash.com/premium_photo-1672363353886-a106864f5cb9?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="hinhanh"
            />
            <div>
              <p>(NEW) PEPPERONI PIZZA (CASE OF 6)</p>
              <span>PACK SIZE: 6</span>
            </div>
          </div>
          <div className="quantity">
            <button className="increment">
              <i class="fa fa-plus"></i>
            </button>
            <span className="cart-quantity">2</span>
            <button className="decrement">
              <i class="fa fa-minus"></i>
            </button>
          </div>
          <div className="cart-item-price">
            <span className="cart-price">$155</span>
            <button className="remove">
              <i class="fa fa-remove"></i>
            </button>
          </div>
        </li>
        <hr />
      </ul>
      <div className="cart-check">
        <p className="totalPrice">Total Price: </p>
        <Link to="/checkout" className="go-to-orders-link">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
