import { createSlice } from '@reduxjs/toolkit';


// Big letter variable should be imported and exported to be used.
const initialState = {
    counter:0,
    showCounter: true
};

// This is a redux toolkit and it is easier way of using the following main function.
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

export default counterSlice;

// This is redux toolkit action.
export const counterActions = counterSlice.actions;