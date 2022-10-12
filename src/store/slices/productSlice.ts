import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

interface ProductState {
    data: RootObject | null;
    loading: boolean;
    error: string;
}

const initialState : ProductState = {
    data: null,
    loading: false,
    error: '',
};

export const fetchAllProduct = createAsyncThunk( 'fetchAllProduct', async () => {
    const response = await axios.get<RootObject>('https://upayments-studycase-api.herokuapp.com/api/products')
    return response.data
})

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: builder => {
       builder.addCase( fetchAllProduct.pending, ( state, action) => {
           state.loading = true;
           state.error = "";
       });

       builder.addCase( fetchAllProduct.fulfilled, ( state, action: PayloadAction<RootObject> ) => {
           state.loading = false;
           state.data = action.payload;
       });

       builder.addCase( fetchAllProduct.rejected, ( state, action ) => {
           state.loading = false;
           state.error = "Something went wrong";
       });
    }
})

interface ProductTypes {
    _id: string;
    name: string;
    avatar: string;
    description: string;
    price: number;
    category: string;
    developerEmail: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

interface RootObject {
    message: string;
    products: ProductTypes[];
}

export default productSlice.reducer;