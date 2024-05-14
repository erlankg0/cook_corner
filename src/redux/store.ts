import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authSlice from "./reducer/auth.ts";

const rootReducer = combineReducers({
    auth: authSlice,
})

const store = configureStore({
    reducer: rootReducer,
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch;