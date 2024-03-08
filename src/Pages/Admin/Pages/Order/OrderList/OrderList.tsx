import React, { useEffect, useState } from "react";
import apis from "../../../../../apis";
import "./OrderList.scss";
import ModalStatusOrder from "./ModalStatusOrder";
export default function OrderList() {

  const [stateOrderList, setStateOrderList] = useState();

  const handleDelete = (id) => {};
  useEffect(() => {
    const fetchOrderList = async () => {
      const res = await apis.receiptApi.getAllReceipt();
      console.log("res", res.data);

      setStateOrderList(res.data);
    };
    fetchOrderList();
  }, []);
  return (
    <div>
      <div className="categories-container">
        <h1 className="categories-title">Order List </h1>
        
        <table className="product-table">
          <tr>
            <th className="table-header">STT</th>
            <th className="table-header">UserId</th>
            <th className="table-header">User Name</th>
            <th className="table-header">Phone Number</th>
            <th className="table-header">Address</th>
            <th className="table-header">Payment</th>
            <th className="table-header">Create at</th>
            <th className="table-header">Total Price</th>
            <th className="table-header">Detail Product</th>
            <th className="table-header">Status Order</th>
            <th className="table-header">Check Order</th>
          </tr>
          {stateOrderList?.map((order, index: number) => {
            return (
              <tr className="product-row">
                <td className="table-cell" key={index}>
                  {index}
                </td>
                <td className="table-cell">{order.user_id}</td>
                <td className="table-cell">{order.userName}</td>
                <td className="table-cell">{order.phoneNumber}</td>
                <td className="table-cell">{order.address}</td>
                <td className="table-cell">{order.payment_method}</td>
                <td className="table-cell">{order.created_at}</td>
                <td className="table-cell">${order.total_price}</td>
                <td className="table-cell">
                  <button className="btn btn-see-detail">See Detail</button>
                </td>
                <td className="table-cell">{order.status}</td>

                <td className="table-cell">
                  <ModalStatusOrder order={order}/>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
