import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //mutuating the state here
      state.items.push(action.payload);
    },
    removeITem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
      //or
      //return {items:[]}
    },
  },
});

export const { addItem, removeITem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

// state = [] -> is wrong because we are not mutuating
