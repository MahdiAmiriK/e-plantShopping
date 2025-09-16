import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const itemIsInCart = state.items.find(
            (item) => item.name === action.payload.name
        );

        if (itemIsInCart) {
            itemIsInCart.quantity++;
        } else {
            state.items.push({ ...action.payload, quantity: 1 });
        }
    },

    removeItem: (state, action) => {
        const index = state.items.findIndex(
            (item) => item.name === action.payload.name
        );

        if (index >= 0){
            state.items.splice(index, 1);
        }
    },

    updateQuantity: (state, action) => {
        const itemIsInCart = state.items.find(
            (item) => item.name === action.payload.name
        );

        if(itemIsInCart) {
            itemIsInCart.quantity = action.payload.quantity;
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
