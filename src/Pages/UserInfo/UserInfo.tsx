import React, { useEffect, useState } from "react";
import "./UserInfo.scss"; // Import CSS file
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { StoreType } from "../../Stores";
import "font-awesome/css/font-awesome.min.css";
import apis from "../../apis";
import ModalChangeInfo from "./ModalChangeInfo";

const UserInfo = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [userData, setUserData] = useState();
  const userStore = useSelector((store: StoreType) => store.userReducer);

  console.log("userStore", userStore.data?.data.email);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await apis.userApi.getUserByEmail(
          userStore.data?.data.email
        );
        console.log("res", res.data[0]);
        setUserData(res.data[0]);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="user-info-container">
      <h2>User Information</h2>
      <div className="user-info-item">
        <label>Name: {userData?.userName}</label>
      </div>
      <div className="user-info-item">
        <label>Phone: {userData?.phoneNumber}</label>
      </div>
      <div className="user-info-item">
        <label>Email: {userData?.email}</label>
      </div>

      <div className="user-info-item">
        <label>Payment Method: {userData?.payment_method}</label>
      </div>
      <div className="user-info-item">
        <label>Gender:</label>
      </div>
      <div className="user-info-item">
        <label>
          Order Status : {userData?.status}
          <button className="btn btn-changeInfo">Cancel Order</button>
        </label>
      </div>

      <div className="user-info-item">
        <label htmlFor="" className="user-info-item-avatar">
          <img
            src={userData?.avatar}
            alt="user_avatar"
            className="user_avatar"
          />
          <input type="file" />
        </label>
      </div>

      <div className="btn">
        <ModalChangeInfo userData={userData} setUserData={setUserData} />
      </div>
    </div>
  );
};

export default UserInfo;
