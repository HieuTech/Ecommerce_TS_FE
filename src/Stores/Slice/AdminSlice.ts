import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "categories",
  initialState: {
    navigate: "",
  },
  reducers: {
    setDashBoard: (state, action) => {
      state.navigate = action.payload;
    },
    setPizza: (state, action) => {
      state.navigate = action.payload;
    },
    setCake: (state, action) => {
      state.navigate = action.payload;
    },
    setBeverage: (state, action) => {
      state.navigate = action.payload;
    },
    setVegan: (state, action) => {
      state.navigate = action.payload;
    },
    setListUser: (state, action) => {
      state.navigate = action.payload;
    },
    setListProduct: (state, action) => {
      state.navigate = action.payload;
    },
    setOnSale: (state, action) => {
      state.navigate = action.payload;
    },
    setBestSeller: (state, action) => {
      state.navigate = action.payload;
    },
    setListOrder: (state, action) => {
      state.navigate = action.payload;
    },
  },
});

export const adminReducer = adminSlice.reducer;
export const adminAction = adminSlice.actions;
