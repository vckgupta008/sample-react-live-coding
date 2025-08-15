import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Example initial items
    totalItems: 0,          
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      state.items.push(item);
    //   state.totalItems += 1;
    //   state.totalPrice += item.price; // Assuming item has a price property
    },
    removeItem: (state, action) => {
        state.items.pop();
    //   const itemId = action.payload;
    //   const index = state.items.findIndex(item => item.id === itemId);
    //   if (index !== -1) {
    //     const item = state.items[index];
    //     state.items.splice(index, 1);
    //     state.totalItems -= 1;
    //     state.totalPrice -= item.price; // Adjust total price
    //   }
    },
    clearCart: (state) => {
      state.items = [];
    //   state.totalItems = 0;
    //   state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;