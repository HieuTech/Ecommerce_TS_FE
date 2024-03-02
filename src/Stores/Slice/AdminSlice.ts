import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "categories",
  initialState: {
    navigate: "",
  },
  reducers: {
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
  },
});

export const adminReducer = adminSlice.reducer;
export const adminAction = adminSlice.actions;
