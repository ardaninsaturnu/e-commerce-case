import {configureStore} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import productSlice from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    products: productSlice
  },
});

// Infer the `RootState` and `AppDispatch` types from the index itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;