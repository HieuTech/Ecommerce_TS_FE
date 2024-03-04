import React, { useEffect, useState } from "react";
import "./ListUser.scss";
import apis from "../../../../../apis";
import ModalBlock from "../Components/ModalBlock";
export default function ListUser() {
  const [listUser, setListUser] = useState();

  console.log("list ", );


    

  useEffect(()=>{

    const fetchUser = async() =>{
      try {
        const res = await apis.userApi.getUser()
          setListUser(res.data);
          console.log("res",res.data);
          
      } catch (error) {
        console.log("error",error);
        
      }
    }
    fetchUser();
  },[])
  return (
    <div>
      <div className="categories-container">
        <h1 className="categories-title">List Users</h1>
        <table className="user-table">
          <tr>
            <th className="table-header">STT</th>
            <th className="table-header">Email</th>
            <th className="table-header">Password</th>
            <th className="table-header">avatar</th>
            <th className="table-header">Status</th>
            <th className="table-header">Receipt Number</th>
            <th className="table-header">Block</th>
          </tr>
          {listUser?.map((user, index: number) => {
            return (
              <tr className="user-row" key={index}>
                <td className="table-cell">{index}</td>
                <td className="table-cell">{user.email}</td>
                <td className="table-cell">{user.password}</td>
                <td className="table-cell">
                  <img src={user.avatar} alt="" className="img" />
                </td>
                <td className="table-cell">{user.status}</td>

                <td className="table-cell">{user.receipt_id}</td>
                <td className="table-cell">
                  <ModalBlock userStatus={user.status} />
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
