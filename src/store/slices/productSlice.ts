import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import { AllObject, ProductObject } from "../apiTypes";

interface ProductState {
    list: {
        data: AllObject | null,
        loading: boolean,
        error: string
    },
    product: {
        data: ProductObject | null,
        loading: boolean,
        error: string
    }
}

const initialState : ProductState = {
    list : {
        data: null,
        loading: false,
        error: '',
    },
    product : {
        data: null,
        loading: false,
        error: '',
    }
};

export const fetchAllProduct = createAsyncThunk( 'fetchAllProduct', async () => {
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1laG1ldGFyZGEuY2VsaWtAaG90bWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vYXJkYW5pbnNhdHVybnUiLCJpYXQiOjE2NjU1MDUxMDYsImV4cCI6MTY2NTkzNzEwNn0.zeXT9Qopzz1cKktarRrRWE4n_-UtXuI5Cdvr98Rl-Pg'

    const response = await axios.get<AllObject>(
        'https://upayments-studycase-api.herokuapp.com/api/products',
        {
            headers: { Authorization: `Bearer ${token}` }
        }
    )
    return response.data
})

export const fetchProduct = createAsyncThunk( 'fetchProduct', async (id: string ) => {
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1laG1ldGFyZGEuY2VsaWtAaG90bWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vYXJkYW5pbnNhdHVybnUiLCJpYXQiOjE2NjU1MDUxMDYsImV4cCI6MTY2NTkzNzEwNn0.zeXT9Qopzz1cKktarRrRWE4n_-UtXuI5Cdvr98Rl-Pg'

    const response = await axios.get<ProductObject>(
        `https://upayments-studycase-api.herokuapp.com/api/products/${ id }`,
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
    extraReducers:  {
        [fetchAllProduct.pending.toString()]: ( state ) => {
           state.list.loading = true;
           state.list.error = "";
       },
       [fetchAllProduct.fulfilled.toString()]: ( state, action: PayloadAction<AllObject> ) => {
           state.list.loading = false;
           state.list.data = action.payload;
       },
       [fetchAllProduct.rejected.toString()]: ( state ) => {
           state.list.loading = false;
           state.list.error = "Something went wrong";
       },

       [fetchProduct.pending.toString()]: (state ) => {
         state.product.loading = true;
         state.product.error = "";
       },
       [fetchProduct.fulfilled.toString()]: (state, action: PayloadAction<ProductObject> ) => {
         state.product.loading = false;
         state.product.data = action.payload;
       },
       [fetchProduct.rejected.toString()]: (state ) => {
         state.product.loading = false;
         state.product.error = "Something went wrong!";
       }
    }
})

export default productSlice.reducer;