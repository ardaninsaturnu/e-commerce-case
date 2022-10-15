import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import { AllObject, ProductObject, CreateObject } from "../apiTypes";

interface ProductState {
  list: {
    data: AllObject | null,
    loading: boolean,
    error: string
  },
  detail: {
    data: ProductObject | null,
    loading: boolean,
    error: string
  },
  create: {
    data: CreateObject | null,
    loading: boolean,
    error: string,
  }
}

const initialState: ProductState = {
  list: {
    data: null,
    loading: false,
    error: '',
  },
  detail: {
    data: null,
    loading: false,
    error: '',
  },
  create: {
    data: null,
    loading: false,
    error: '',
  }
};

export const fetchAllProduct = createAsyncThunk('fetchAllProduct', async () => {
  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1laG1ldGFyZGEuY2VsaWtAaG90bWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vYXJkYW5pbnNhdHVybnUiLCJpYXQiOjE2NjU1MDUxMDYsImV4cCI6MTY2NTkzNzEwNn0.zeXT9Qopzz1cKktarRrRWE4n_-UtXuI5Cdvr98Rl-Pg'

  const response = await axios.get<AllObject>(
    'https://upayments-studycase-api.herokuapp.com/api/products',
    {
      headers: {Authorization: `Bearer ${token}`}
    }
  )
  return response.data
})

export const fetchProduct = createAsyncThunk('fetchProduct', async (id: string | undefined) => {
  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1laG1ldGFyZGEuY2VsaWtAaG90bWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vYXJkYW5pbnNhdHVybnUiLCJpYXQiOjE2NjU1MDUxMDYsImV4cCI6MTY2NTkzNzEwNn0.zeXT9Qopzz1cKktarRrRWE4n_-UtXuI5Cdvr98Rl-Pg'

  const response = await axios.get<ProductObject>(
    `https://upayments-studycase-api.herokuapp.com/api/products/${id}`,
    {
      headers: {Authorization: `Bearer ${token}`}
    }
  )
  return response.data;
})

export const createProduct = createAsyncThunk('createProduct', async ( formData: object | undefined ) => {
  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1laG1ldGFyZGEuY2VsaWtAaG90bWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vYXJkYW5pbnNhdHVybnUiLCJpYXQiOjE2NjU1MDUxMDYsImV4cCI6MTY2NTkzNzEwNn0.zeXT9Qopzz1cKktarRrRWE4n_-UtXuI5Cdvr98Rl-Pg'

  const response = await axios.post<CreateObject>(
    `https://upayments-studycase-api.herokuapp.com/api/products`,
    formData,
    {headers: {Authorization: `Bearer ${token}`}
    })

  const {data} = response

    return data;
})

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllProduct.pending.toString()]: (state) => {
      state.list.loading = true;
      state.list.error = "";
    },
    [fetchAllProduct.fulfilled.toString()]: (state, action: PayloadAction<AllObject>) => {
      state.list.loading = false;
      state.list.data = action.payload;
    },
    [fetchAllProduct.rejected.toString()]: (state) => {
      state.list.loading = false;
      state.list.error = "Something went wrong";
    },
    [fetchProduct.pending.toString()]: (state) => {
      state.detail.loading = true;
      state.detail.error = "";
    },
    [fetchProduct.fulfilled.toString()]: (state, action: PayloadAction<ProductObject>) => {
      state.detail.loading = false;
      state.detail.data = action.payload;
    },
    [fetchProduct.rejected.toString()]: (state) => {
      state.detail.loading = false;
      state.detail.error = "Something went wrong!";
    },
    [createProduct.pending.toString()]: (state) => {
      state.create.loading = true;
      state.create.error = "";
    },
    [createProduct.fulfilled.toString()]: (state, action: PayloadAction<CreateObject>) => {
      state.create.loading = false;
      state.create.data = action.payload;
    },
    [createProduct.rejected.toString()]: (state) => {
      state.create.loading = false;
      state.create.error = "Something went wrong!";
    }
  }
})

export default productSlice.reducer;