import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { itemsSlice } from './slices/itemsSlice';

export const store: any = configureStore({
  reducer: {
    items: itemsSlice.reducer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
