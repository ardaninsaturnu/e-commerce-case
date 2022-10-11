import { createSlice } from "@reduxjs/toolkit";

export interface ProductTypes {
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

export interface RootObject {
    message: string;
    products: ProductTypes[];
}

const initialState: ProductTypes[] = [];

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getAll : ( state, action ) => {

        }
    }
})