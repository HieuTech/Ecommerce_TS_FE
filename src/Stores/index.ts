import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { categoriesReducer } from "./Slice/Categories"

const RootReducer = combineReducers({
    categoriesReducer:categoriesReducer
})

export type StoreType = ReturnType<typeof RootReducer>;
export const store = configureStore({
    reducer: RootReducer
})