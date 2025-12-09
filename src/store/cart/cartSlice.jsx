import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existing = state.items.find(i => i.id === item.id);

            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({ ...item, quantity: 1 });
            }

            state.totalQuantity += 1;
            state.totalPrice += parseFloat(item.price);
            console.log(item);
            console.log(state.totalQuantity);
            console.log(state.totalPrice);
            console.log("Before freeze:", current(state.items));
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            const item = state.items.find(i => i.id === id);

            if (item) {
                state.totalQuantity -= item.quantity;
                state.totalPrice -= parseFloat(item.price) * item.quantity;
                state.items = state.items.filter(i => i.id !== id);
            }
        },
        increaseQuantity: (state, action) => {
            const id = action.payload;
            const item = state.items.find(i => i.id === id);

            if (item) {
                item.quantity += 1;
                state.totalQuantity += 1;
                state.totalPrice += parseFloat(item.price);
            }
        },
        decreaseQuantity: (state, action) => {
            const id = action.payload;
            const item = state.items.find(i => i.id === id);

            if (item && item.quantity > 1) {
                item.quantity -= 1;
                state.totalQuantity -= 1;
                state.totalPrice -= parseFloat(item.price);
            } else if (item && item.quantity === 1) {
                state.totalQuantity -= 1;
                state.totalPrice -= parseFloat(item.price);
                state.items = state.items.filter(i => i.id !== id);
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        },
    },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;