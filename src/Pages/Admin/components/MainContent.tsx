import React from 'react'
import { Layout, theme } from "antd";

import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
const {  Content, Footer } = Layout;
export default function MainContent() {
   

    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Header/>
        <Content style={{ margin: "0 16px" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet/>
            
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
}
