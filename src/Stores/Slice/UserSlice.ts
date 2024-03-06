import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import {User} from "../../apis/user.api"
import apis from "../../apis"
enum Status {
    ACTIVE =  "ACTIVE",
    INACTIVE = "INACTIVE",
    BAN =  "BAN",

}

interface UserStatus {
    data : User | null,
    loading: boolean
}

const initialState: UserStatus = {
    data: null,
    loading: false,
}


export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{

    },
    extraReducers:(builder) =>{
        builder.addCase(fetchUser.pending, (state, action: any) =>{
            state.loading = true
        })
        builder.addCase(fetchUser.fulfilled, (state, action: any) => {
            state.data = action.payload
            state.loading = false
        })
    }
})

const fetchUser = createAsyncThunk("user/fetchData", async () =>{
    const data = await apis.userApi.authen(localStorage.getItem("user_token") || "null")
       
    return data
})

export const userReducer = userSlice.reducer;
export const userAction = {
    ...userSlice.actions,
    fetchUser
}