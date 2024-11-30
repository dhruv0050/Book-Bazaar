import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./features/cart/cartSlice"
import bookApi from './features/book/bookApi';
export const store = configureStore({
  reducer: {
    cart : cartReducer,
    [bookApi.reducerPath]: bookApi.reducer,
  },
  middleware: ( getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware)
})