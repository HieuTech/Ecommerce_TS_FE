import { createSlice } from "@reduxjs/toolkit";




export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    id: "",
    categoriesList: [],
  },
  reducers: {
    setData: (state, action) => {
      const { id, categoriesList } = action.payload;
      state.categoriesList = categoriesList;
      state.id = id;
    },
  },
}); 

export const categoriesReducer = categoriesSlice.reducer;
export const categoriesAction = categoriesSlice.actions