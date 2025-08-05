import { configureStore } from '@reduxjs/toolkit';
import { userApiSlice } from './slices/usersApiSlice';


export const AppStore = configureStore({
  reducer: {
    [userApiSlice.reducerPath]: userApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApiSlice.middleware),
});
