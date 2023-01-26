import { configureStore } from '@reduxjs/toolkit';
import activePagesReducer from './activePageSlice';

export const store = configureStore({
  reducer: {
    activePage: activePagesReducer,
  },
});
