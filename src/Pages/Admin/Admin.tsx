import React, { useEffect, useState } from "react";

import "./Admin.scss";
import SideBar from "./components/SideBar";

import { Layout } from "antd";
import MainContent from "./components/MainContent";
import { StoreType } from "../../Stores";
import { useSelector } from "react-redux";

export default function Admin() {
  const adminStore = useSelector((store: StoreType) => store.adminReducer);
  const userStore = useSelector((store: StoreType) => store.userReducer)
  console.log("userStore", userStore);
  
  useEffect(() => {

    

    if (adminStore.data.status == 500 && !adminStore.loading) {
      console.log(adminStore);
      localStorage.removeItem("admin_token")
      window.location.href = "/admin/login"
    }
  }, [adminStore.data, adminStore.loading]);

  return (
    <div>
      {adminStore.data && (
        <Layout>
          <SideBar />
          <MainContent />
        </Layout>
      ) }
    </div>
  );
}
