import { removeToken, setToken } from "../../utils/helperFunctions";
import axios from 'axios'
import store from "..";
import { signInSuccess, signInFailed, signUpSuccess, signUpFailed, signOutSuccess } from "./auth";


export const authService = {
    async signIn(userData: {email: string, password: string}) {
        try {
            const response = await axios.post('api/auth/signIn', userData);
            setToken(response.data.accessToken);
            store.dispatch(signInSuccess(response.data))
            return response.data;
        } catch(error) {
            store.dispatch(signInFailed(error.response.data.message))
        }
    },

    async signUp(userData: {email: string, password: string}) {
        try {
            const response = await axios.post('api/auth/signUp', userData);
            setToken(response.data.accessToken);
            store.dispatch(signUpSuccess(response.data))
            return response.data;
        } catch(error) {
            store.dispatch(signUpFailed(error.message))
        }
    },

    async signOut() {
            removeToken();
            store.dispatch(signOutSuccess());
        }
};