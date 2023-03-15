import { createSlice } from '@reduxjs/toolkit';


// action.payload is any value from custom object in any files.
// First, if(!existingItem) code works because items[] is empty array there is no id in there but newItem has its own id because it comes from DUMMY_PRODUCTS objects from product.js

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        changed: false,
    },
    reducers: {

        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
          },

        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            state.changed = true;
            if(!existingItem) {
                state.items.push({
                    id: newItem.id, 
                    price: newItem.price, 
                    quantity: 1, 
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            }
            else {
                existingItem.quantity++; 
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            state.totalQuantity--;
            state.changed = true;
            if(existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id)
            }
            else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },
    }
});

export default cartSlice;
export const cartActions = cartSlice.actions;
