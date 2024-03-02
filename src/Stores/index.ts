import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { categoriesReducer } from "./Slice/CategoriesSlice";
import { adminReducer } from "./Slice/AdminSlice";
const RootReducer = combineReducers({
  categoriesReducer: categoriesReducer,
  adminReducer: adminReducer,
});

export type StoreType = ReturnType<typeof RootReducer>;
export const store = configureStore({
  reducer: RootReducer,
});
