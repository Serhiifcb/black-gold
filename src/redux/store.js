import { configureStore } from '@reduxjs/toolkit';
import activeFilterReducer from './activeFilterSlice';
import activePagesReducer from './activePageSlice';

export const store = configureStore({
  reducer: {
    activePage: activePagesReducer,
    activeFilter: activeFilterReducer,
  },
});
