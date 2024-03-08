import React, { FormEvent, useEffect, useState } from "react";

import "./Checkout.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import apis from "../../apis";
import { StoreType } from "../../Stores";
import { ReceiptStatus } from "../../apis/receipt.api";
import { message } from "antd";
function Orders() {
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const [userDataReceipt, setUserDataReceipt] = useState();
  const [isEmptyField, setIsEmptyField] = useState(false);
  const userData = useSelector((store: StoreType) => store.userReducer);
  const navigate = useNavigate();
  // console.log("user", userDataReceipt);

  const userEmail = userData.data?.data;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userName = (e.target as HTMLFormElement).userName.value;
    const address = (e.target as HTMLFormElement).address.value;
    const phoneNumber = (e.target as HTMLFormElement).phone.value;
    const payment_method = (e.target as HTMLFormElement).payment.value;

    // handleValidate(userName, address, phoneNumber, payment_method);
    if (!userName || !address || !phoneNumber || !payment_method) {
      setIsEmptyField(true);
      return;
    }
    setIsEmptyField(false);

    const receipt = {
      id: "" + Math.ceil(Math.random() * Date.now()),
      created_at: new Date(),
      userName,
      phoneNumber,
      address,
      payment_method,
      status: ReceiptStatus.PENDING,
      total_price: cartTotalPrice,
      product: userDataReceipt?.cart,
      user_id: userDataReceipt?.id,
    };
    console.log("receipt,", receipt);

    try {
      const resReceipt = await apis.receiptApi.postReceipt(receipt);
      console.log("res", resReceipt.data.user_id);
      
      message.success("Đặt hàng thành công");
      setTimeout( async() => {
        const updateCart = {
          id: resReceipt.data.user_id,
          cart: []
        }
        try {
          const res = await apis.userApi.updateUser(updateCart);
          console.log("res",res.data);
          
        } catch (error) {
          console.log("error",error);
          
        }
        navigate("/order-received");
      }, 1000);
    } catch (error) {
      console.log("error", error);
    }

    //update user receipt_status, receipt_id
    const updateUser = {
      id: receipt.user_id,
      status: receipt.status,
      receipt_id: receipt.id
    }
    try {
      const res = await apis.userApi.updateUserReceiptStatus(updateUser)
      console.log("res", res.data);
      
    } catch (error) {
      console.log("error", error);
      
    }

  };
  //---------validate

  // const handleValidate = (
  //   userName: string,
  //   address: string,
  //   phone: string,
  //   payment: string
  // ) => {

  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await apis.userApi.getUserByEmail(userEmail.email);
        setUserDataReceipt(res.data[0]);
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
    <div className="orders-container">
      <div className="form-container">
        <h2>Customer Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="error-message"></div>
          <label htmlFor="name">User Name</label>
          <input
            id="name"
            type="text"
            name="userName"
            placeholder={userDataReceipt?.userName}
          />
          <div>
            <label>Phone Number:</label>
            <input type="tel" name="phone" />
          </div>
          <div>
            <label>Address:</label>
            <input type="text" name="address" />
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
                name="payment"
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
                name="payment"
                className="bank-input vietcombank"
                id="vietcombank"
                value="vietcombank" // Đặt giá trị cho radio button này
              />
            </div>
          </div>

          {isEmptyField && (
            <p className="error-message">Please fill in all fields.</p>
          )}

          <div className="order-summary">
            <h2>Order Summary</h2>

            <p className="totalPrice">Total Price: ${cartTotalPrice}</p>
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
