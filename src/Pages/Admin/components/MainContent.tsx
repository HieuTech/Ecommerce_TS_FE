import React, { useState } from 'react'

import { Layout, theme } from "antd";
import Pizza from '../Pages/Categories/Pizza/Pizza';
import { useSelector } from 'react-redux';
import Cake from '../Pages/Categories/Cake/Cake';
import DashBoard from '../Pages/DashBoard/DashBoard';
import Vegan from '../Pages/Categories/Vegan/Vegan';
import Beverage from '../Pages/Categories/Beverage/Beverage';

const { Header, Content, Footer } = Layout;
export default function MainContent() {
    const navigate = useSelector((store) => store.adminReducer.navigate);
  
  const result = () =>{
    switch (navigate) {
      case "Pizza":
        return <Pizza Pizza={navigate} />;
      case "Cake":
        return <Cake Cake={navigate} />;
      case "Beverage":
        return <Beverage Beverage={navigate} />;
      case "Vegan":
        return <Vegan Vegan={navigate} />;

      default:
        return <DashBoard />;
        break;
    }
  }

    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {result()}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
}
