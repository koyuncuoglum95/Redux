import { createSlice } from '@reduxjs/toolkit';

const authInitialState = {
    isAuthenticated: false
};

//  login() and logout() are type of the toolkit like previous counterReducer main function.
const authSlice = createSlice({
    name: 'authentication',
    initialState: authInitialState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout (state) {
            state.isAuthenticated = false;
        },
    },
});


export default authSlice;

// This is redux toolkit action.
export const authActions = authSlice.actions;