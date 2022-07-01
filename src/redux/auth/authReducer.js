import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./authOperations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLogIn: false,
    isRefreshing: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogIn = true;
        },
        [authOperations.logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogIn = true;
        },
        [authOperations.logOut.fulfilled](state) { 
            state.user = { name: null, email: null };
            state.token = null;
            state.isLogIn = false;
        },
        [authOperations.refreshCurrentUser.pending](state) {
            state.isRefreshing = true;
        },
        [authOperations.refreshCurrentUser.fulfilled](state, action) { 
            state.user = action.payload;
            state.isLogIn = true;
            state.isRefreshing = false;
        },
        [authOperations.refreshCurrentUser.rejected](state) { 
            state.isRefreshing = false;
        }
    }
});

export default authSlice.reducer;