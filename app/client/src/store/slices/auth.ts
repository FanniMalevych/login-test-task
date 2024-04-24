import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: null,
    userData: {},
    errorMsg: ''
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signInSuccess: (state, action) => {
            const { accessToken, user }  = action.payload;
            state.userData = user;
            state.token = accessToken
        },
        signInFailed: (state, action) => {
            state.errorMsg = action.payload
        },
        signUpSuccess: (state, action) => {
            const { accessToken, user }  = action.payload;
            state.userData = user;
            state.token = accessToken
        },
        signUpFailed: (state, action) => {
            state.errorMsg = action.payload
        },
        signOutSuccess: (state) => {
            state.token = null;
            state.userData = {};
        }
    },
})


export const { signInSuccess, signOutSuccess, signUpSuccess, signInFailed, signUpFailed } = authSlice.actions;

export default authSlice.reducer;