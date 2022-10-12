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
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1laG1ldGFyZGEuY2VsaWtAaG90bWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vYXJkYW5pbnNhdHVybnUiLCJpYXQiOjE2NjU1MDUxMDYsImV4cCI6MTY2NTkzNzEwNn0.zeXT9Qopzz1cKktarRrRWE4n_-UtXuI5Cdvr98Rl-Pg'

    const response = await axios.get<RootObject>(
        'https://upayments-studycase-api.herokuapp.com/api/products',
        {
            headers: { Authorization: `Bearer ${token}` }
        }
    )
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