import React, { useState } from "react";

import {
  MailOutlined,
  DashboardOutlined,
  TeamOutlined,
  MessageOutlined,
  ProductOutlined,
  FundOutlined,
  UserOutlined,
  FileOutlined,
  HeartOutlined,
  OrderedListOutlined,
  ShopOutlined,
  RestOutlined,
  FireOutlined,
  LikeOutlined,
  PauseOutlined,
  GiftOutlined,
  CheckOutlined,
  NotificationOutlined,
  RocketOutlined,
  SettingOutlined,
  SunOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import {  Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];


function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("DashBoard", "/admin/dashboard", <DashboardOutlined />),
  getItem("User", "User", <TeamOutlined />, [
    getItem("List User", "/admin/list-user", <UserOutlined />),
    getItem("Email", "Email", <MailOutlined />),
    getItem("Messages", "Messages", <MessageOutlined />),
    getItem("FeedBack", "FeedBack", <FileOutlined />),
  ]),
  getItem("Categories", "Categories", <ShopOutlined />, [
    getItem("Pizza", "/admin/pizza"),
    getItem("Cake", "/admin/cake"),
    getItem("Vegan", "/admin/vegan"),
    getItem("Beverage", "/admin/beverage"),
  ]),
  getItem("Products", "Products", <ProductOutlined />, [
    getItem("On Sale", "/admin/on-sale", <FireOutlined />),
    getItem("Rating", "Rating", <LikeOutlined />),
    getItem("Best Seller", "/admin/best-seller", <HeartOutlined />),
    getItem("Voucher", "Voucher", <GiftOutlined />),
  ]),

  getItem("Orders", "Orders", <TeamOutlined />, [
    getItem("Order List", "OrderList", <OrderedListOutlined />),
    getItem("Canceled", "Canceled", <RestOutlined />),
    getItem("Pending", "Pending", <PauseOutlined />),
    getItem("Approved", "Approved", <CheckOutlined />),
    getItem("Shipping", "Shipping", <RocketOutlined />),
  ]),
  getItem("Chart", "Chart", <FundOutlined />),
  getItem("Notification", "Notification", <NotificationOutlined />),
  getItem("Setting", "Setting", <SettingOutlined />, [
    getItem("Themes", "Themes", <SunOutlined />),
  ]),
];

export default function SideBar() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate()
  const handleNavigate = (e: any) => {
    switch (e.key) {
      // case "Pizza":
      //   navigate("/admin/pizza");
      //   break;
      
      default:
        navigate(e.key);
        break;
    }
  };


  return (
    <div>
      <Sider
        style={{ minHeight: "100vh" }}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          onClick={(event) => {
            handleNavigate(event);
          }}
          items={items}
        />
      </Sider>
    </div>
  );
}
