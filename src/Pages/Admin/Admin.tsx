import React, { useState } from "react";


import "./Admin.scss";
import SideBar from "./components/SideBar";

import { Layout } from "antd";
import MainContent from "./components/MainContent";


export default function Admin() {
   

  return (
    <Layout >
      
      <SideBar/>
      <MainContent/>
    </Layout>
  );
}
