import { createSlice } from "@reduxjs/toolkit";
import {User} from "../../apis/user.api"

interface UserStatus{
    data: User | null
}

const initialState: UserStatus = {
  data: null,
};

export const UserDataSlice = createSlice({
  name: "userData",
  initialState,

  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      // console.log("state.data",state.data);
    },
    setCart: (state, action) => {
      state.data.cart = [...action.payload];
    },
   
  },
});

export const UserDataReducer = UserDataSlice.reducer
export const UserDataAction = UserDataSlice.actions