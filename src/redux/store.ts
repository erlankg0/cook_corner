import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authSlice from "./reducer/auth.ts";
import searchSlice from "./reducer/search.ts";

const rootReducer = combineReducers({
    auth: authSlice,
    search: searchSlice,
})

const store = configureStore({
    reducer: rootReducer,
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch;