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
import {  Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { adminAction } from "../../../Stores/Slice/AdminSlice";

const { Header, Content, Footer, Sider } = Layout;

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
  getItem("DashBoard", "DashBoard", <DashboardOutlined />),
  getItem("User", "User", <TeamOutlined />, [
    getItem("List User", "List User", <UserOutlined />),
    getItem("Email", "Email", <MailOutlined />),
    getItem("Messages", "Messages", <MessageOutlined />),
    getItem("FeedBack", "FeedBack", <FileOutlined />),
  ]),
  getItem("Categories", "Categories", <ShopOutlined />, [
    getItem("Pizza", "Pizza"),
    getItem("Cake", "Cake"),
    getItem("Vegan", "Vegan"),
    getItem("Beverage", "Beverage"),
  ]),
  getItem("Products", "Products", <ProductOutlined />, [
    getItem("On Sale", "On Sale", <FireOutlined />),
    getItem("Rating", "Rating", <LikeOutlined />),
    getItem("Best Seller", "Best Seller", <HeartOutlined />),
    getItem("Voucher", "Voucher", <GiftOutlined />),
  ]),

  getItem("Orders", "Orders", <TeamOutlined />, [
    getItem("Order List", "Order List", <OrderedListOutlined />),
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
    const dispatch = useDispatch()
  const handleNavigate = (e) => {
    console.log("da vao", e.key);
    switch (e.key) {
      case "Pizza":
        dispatch(adminAction.setPizza("Pizza"));
        break;
      case "Cake":
        dispatch(adminAction.setCake("Cake"));
        break;
      case "Beverage":
        dispatch(adminAction.setBeverage("Beverage"));
        break;
      case "Vegan":
        dispatch(adminAction.setVegan("Vegan"));
        break;

      default:
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
          defaultSelectedKeys={["1"]}
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
