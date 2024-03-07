import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { categoriesReducer } from "./Slice/CategoriesSlice";
import { adminAction, adminReducer } from "./Slice/AdminSlice";
import { userAction, userReducer } from "./Slice/UserSlice";
import { UserDataReducer } from "./Slice/UserData.slice";
const RootReducer = combineReducers({
  categoriesReducer: categoriesReducer,
  adminReducer: adminReducer,
  userReducer: userReducer,
  UserDataReducer: UserDataReducer,
});

export type StoreType = ReturnType<typeof RootReducer>;
export const store = configureStore({
  reducer: RootReducer,
});

store.dispatch(adminAction.fetchAdminData());
store.dispatch(userAction.fetchUser());
