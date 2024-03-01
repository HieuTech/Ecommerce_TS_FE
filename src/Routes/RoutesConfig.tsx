import { BrowserRouter, Route, Routes } from "react-router-dom";

import {lazyFn} from "./Lazy"

export default function RoutesConfig(){
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={lazyFn(() => import("../Pages/Home/Home"))}
          />
          <Route
            path="/cart"
            element={lazyFn(() => import("../Pages/Cart/Cart"))}
          />
          <Route
            path="/signin"
            element={lazyFn(() => import("../Pages/Signin/Signin"))}
          />
          <Route
            path="/signup"
            element={lazyFn(() => import("../Pages/Signup/Signup"))}
          />
          <Route
            path="/admin"
            element={lazyFn(() => import("../Pages/Admin/Admin"))}
          />
          <Route
            path="/checkout"
            element={lazyFn(() => import("../Pages/Checkout/Checkout"))}
          />
          <Route
            path="/order-received"
            element={lazyFn(
              () => import("../Pages/OrderReceived/OrderReceived")
            )}
          />
          <Route
            path="/product-detail"
            element={lazyFn(
              () => import("../Pages/ProductDetail/ProductDetail")
            )}
          />
          <Route
            path="/shop"
            element={lazyFn(
              () => import("../Pages/Shop/Shop")
            )}
          />
          <Route
            path="/user-info"
            element={lazyFn(
              () => import("../Pages/UserInfo/UserInfo")
            )}
          />
         
        </Routes>
      </BrowserRouter>
    );
}