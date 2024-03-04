import { BrowserRouter, Route, Routes } from "react-router-dom";

import { lazyFn } from "./Lazy";

export default function RoutesConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={lazyFn(() => import("../Pages/Home/Home"))} />
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
          path="/checkout"
          element={lazyFn(() => import("../Pages/Checkout/Checkout"))}
        />
        <Route
          path="/order-received"
          element={lazyFn(() => import("../Pages/OrderReceived/OrderReceived"))}
        />
        <Route
          path="/product-detail/:id"
          element={lazyFn(() => import("../Pages/ProductDetail/ProductDetail"))}
        />
        <Route
          path="/shop"
          element={lazyFn(() => import("../Pages/Shop/Shop"))}
        />
        <Route
          path="/user-info"
          element={lazyFn(() => import("../Pages/UserInfo/UserInfo"))}
        />
        <Route
          path="*"
          element={lazyFn(() => import("../Pages/PageNotFound/PageNotFound"))}
        />

        {/* --------------------------------ADMIN---------------------- */}
        <Route
          path="/admin"
          element={lazyFn(() => import("../Pages/Admin/Admin"))}
        >
          <Route
            path="/admin/list-user"
            element={lazyFn(
              () => import("../Pages/Admin/Pages/Users/ListUser/ListUser")
            )}
          />
          <Route
            path="/admin/on-sale"
            element={lazyFn(
              () => import("../Pages/Admin/Pages/Products/OnSale/OnSale")
            )}
          />
          <Route
            path="/admin/pizza"
            element={lazyFn(
              () => import("../Pages/Admin/Pages/Categories/Pizza/Pizza")
            )}
          />
          <Route
            path="/admin/beverage"
            element={lazyFn(
              () => import("../Pages/Admin/Pages/Categories/Beverage/Beverage")
            )}
          />
          <Route
            path="/admin/vegan"
            element={lazyFn(
              () => import("../Pages/Admin/Pages/Categories/Vegan/Vegan")
            )}
          />
          <Route
            path="/admin/cake"
            element={lazyFn(
              () => import("../Pages/Admin/Pages/Categories/Cake/Cake")
            )}
          />
          <Route
            path="/admin/best-seller"
            element={lazyFn(
              () =>
                import("../Pages/Admin/Pages/Products/BestSeller/BestSeller")
            )}
          />
        </Route>

        {/* <Route
          path="/pizza"
          element={lazyFn(
            () => import("../Pages/Admin/Pages/Categories/Pizza/Pizza")
          )}
        /> */}
      </Routes>
    </BrowserRouter>
  );
}
