import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { categoriesReducer } from "./Slice/CategoriesSlice";
import { adminReducer } from "./Slice/AdminSlice";
import * as jose from "jose";

const RootReducer = combineReducers({
  categoriesReducer: categoriesReducer,
  adminReducer: adminReducer,
});

export type StoreType = ReturnType<typeof RootReducer>;
export const store = configureStore({
  reducer: RootReducer,
});

export const generateToken = async (data: any) => {
  const jwt = await new jose.SignJWT(data)
    .setProtectedHeader({ alg: "HS256" })
    .sign(new TextEncoder().encode(`${import.meta.env.VITE_JWT_KEY}`));
  return jwt;
};
export const verifyToken = async (token: string) => {
  try {
    const { payload } = await jose.jwtVerify(
      token,
      new TextEncoder().encode(`${import.meta.env.VITE_JWT_KEY}`)
    );
    return payload;
  } catch (error) {
    return null;
  }
};
