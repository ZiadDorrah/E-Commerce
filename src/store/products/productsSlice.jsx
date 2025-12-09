import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

export const allProducts = createAsyncThunk(
    "products/all",
    async (_, thunkAPI) => {
        try {
            const res = await axios.get("http://localhost:5000/api/products", {
                withCredentials: true,
            });
            console.log("API response:", res.data); // <-- log it here
            return res.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        isLoading: false,
        isError: false,
        message: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(allProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(allProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload.products || []; // <-- use the products array
                console.log("Products in state:", state.products);
            }).addCase(allProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    },
});

export const productsActions = productsSlice.actions;
export default productsSlice.reducer;