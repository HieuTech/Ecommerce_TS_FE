import React, { useState } from "react";
import "./UserInfo.scss"; // Import CSS file
import { Link } from "react-router-dom";
const UserInfo = () => {
  return (
    <div className="user-info-container">
      <h2>User Information</h2>
      <div className="user-info-item">
        <label>Name: </label>
      </div>
      <div className="user-info-item">
        <label>Phone:</label>
      </div>
      <div className="user-info-item">
        <label>Email: </label>
      </div>

      <div className="user-info-item">
        <label>Bank Account:</label>
      </div>
      <div className="user-info-item">
        <label>Gender: </label>
      </div>
      <div className="user-info-item">
        <label htmlFor="" className="user-info-item-avatar">
          <img
            src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png"
            alt="user_avatar"
            className="avatar"
          />
          <input type="file" />
        </label>
      </div>

      <div className="btn">
        <Link to="/">
          <button className="user-info-button">Save</button>
        </Link>
        <button className="user-info-button"></button>
      </div>
    </div>
  );
};

export default UserInfo;
