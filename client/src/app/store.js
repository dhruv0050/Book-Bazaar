import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import bookApi from './features/book/bookApi'
import ordersApi from './features/orders/ordersApi'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [bookApi.reducerPath]: bookApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware, ordersApi.middleware),
})