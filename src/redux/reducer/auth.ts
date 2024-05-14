import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
    email: string;
    password: string;
    refresh: string | null;
    access: string | null;
}

export interface IAuthToken {
    user: number;
    username: string;
    refresh: string;
    access: string;
}


const initialState: IAuthState = {
    email: '',
    password: '',
    refresh: null,
    access: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setEmail(state, action: PayloadAction<string>) {
            state.email = action.payload;
        },
        setPassword(state, action: PayloadAction<string>) {
            state.password = action.payload;
        },
        setAuthTokens(state, action: PayloadAction<IAuthToken>) {
            state.refresh = action.payload.refresh;
            state.access = action.payload.access;
            localStorage.setItem('refreshToken', action.payload.refresh);
            localStorage.setItem('accessToken', action.payload.access);
        },
        clearAuthTokens(state) {
            state.refresh = null;
            state.access = null;
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('accessToken');
        },
        loadAuthTokens(state) {
            const refreshToken = localStorage.getItem('refreshToken');
            const accessToken = localStorage.getItem('accessToken');
            if (refreshToken && accessToken) {
                state.refresh = refreshToken;
                state.access = accessToken;
            }
        },
    },
});

export const { setEmail, setPassword, setAuthTokens, clearAuthTokens, loadAuthTokens } = authSlice.actions;

export default authSlice.reducer;
