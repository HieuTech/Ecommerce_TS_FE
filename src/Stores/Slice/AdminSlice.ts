import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apis from "../../apis";
import { log } from "console";

enum Status {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  BAN = "BAN"
}

interface Admin {
  id: string,
  userName: string,
  password: string,
  status: Status
}

interface AdminState {
  data: Admin | null,
  loading: boolean
}

const initialState: AdminState = {
  data: null,
  loading: false
}



export const adminSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAdminData.pending, (state, action: any) => {
      state.loading = true;
    });
    builder.addCase(fetchAdminData.fulfilled, (state, action: any) => {
      state.data = action.payload;
      state.loading = false
    })  
  },
  
});
const fetchAdminData = createAsyncThunk("admin/fetchData", async () => {
  const  data  = await apis.adminApi.authen(
    localStorage.getItem("admin_token") || "null");
 
  return data;
});



export const adminReducer = adminSlice.reducer;
export const adminAction = {
  ...adminSlice.actions,
  fetchAdminData
}
