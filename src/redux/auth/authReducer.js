import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./authOperations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLogIn: false
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
        }
    }
});

export default authSlice.reducer;