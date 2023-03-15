// STEP 1: Importing redux in react way
// import { createStore,  } from 'redux';

// configureStore is the redux toolkit way os importing the store. createSlice is the toolkit itself.
import {  configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';



// This code is connecting any redux toolkit state (reducer: {identifier: createSlice()})
// auth and counter are example of the indetifier
const store = configureStore({
    reducer: { counter: counterReducer.reducer, auth: authReducer.reducer },
});

// We should export the store because we upload main function and component in there.
export default store;




