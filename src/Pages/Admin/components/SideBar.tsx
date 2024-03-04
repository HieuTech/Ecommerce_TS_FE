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
    getItem("List User", "ListUser", <UserOutlined />),
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
    getItem("On Sale", "OnSale", <FireOutlined />),
    getItem("Rating", "Rating", <LikeOutlined />),
    getItem("Best Seller", "BestSeller", <HeartOutlined />),
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
    const dispatch = useDispatch()
  const handleNavigate = (e) => {
    switch (e.key) {
      case "Pizza":
        // dispatch(adminAction.setPizza("Pizza"));
        navigate("/admin/pizza");
        break;
      case "Cake":
        // dispatch(adminAction.setCake("Cake"));
                navigate("/admin/cake");

        break;
      case "Beverage":
        // dispatch(adminAction.setBeverage("Beverage"));
            navigate("/admin/beverage");

        break;
      case "Vegan":
        // dispatch(adminAction.setVegan("Vegan"));
                navigate("/admin/vegan");

        break;
      case "DashBoard":
        dispatch(adminAction.setDashBoard("DashBoard"));
        break;
      case "ListOrder":
        dispatch(adminAction.setListOrder("ListOrder"));
        break;
      case "BestSeller":
        navigate("/admin/best-seller");
        // dispatch(adminAction.setBestSeller("BestSeller"));
        break;
      case "ListUser":
        // dispatch(adminAction.setListUser("ListUser"));
                navigate("/admin/list-user");

        break;
      case "ListProduct":
        dispatch(adminAction.setListProduct("ListProduct"));
        break;
      case "OnSale":
        // dispatch(adminAction.setOnSale("OnSale"));
                navigate("/admin/on-sale");

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
