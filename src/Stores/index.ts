import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { categoriesReducer } from "./Slice/CategoriesSlice";
import { adminAction, adminReducer } from "./Slice/AdminSlice";
import { userAction, userReducer } from "./Slice/UserSlice";
const RootReducer = combineReducers({
  categoriesReducer: categoriesReducer,
  adminReducer: adminReducer,
  userReducer: userReducer,
});

export type StoreType = ReturnType<typeof RootReducer>;
export const store = configureStore({
  reducer: RootReducer,
});

store.dispatch(adminAction.fetchAdminData())
store.dispatch(userAction.fetchUser())


