import React from "react";
import "./Intro.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Intro = () => {

  

  return (
    <div>
      <hr />

      <div className="product-container">
        <div className="intro-img">
          <img
            className="image"
            src="https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="hinhanh"
          />
        </div>
        <div className="intro">
          <h2 className="intro-title">
            NEW PEPPERONI PIZZA NOW MADE WITH BEYOND MEAT!
          </h2>
          <p className="intro-desc">
            NY-style hand-tossed crust topped with our Signature Tomato Sauce,
            new Vegan Cheese, Fresh Garlic, and the deliciously crispy & savory
            Beyond Meat Plant-Based Pepperoni slices.
          </p>
          <button className="btn btn-order">ORDER NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
