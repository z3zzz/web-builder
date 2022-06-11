import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';
import { persist } from './middlewares';

export const store = configureStore({
  reducer: reducers,
  middleware: [persist],
});

export type AppDispatch = typeof store.dispatch;
