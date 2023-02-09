import { configureStore } from '@reduxjs/toolkit';
import activeFilterReducer from './activeFilterSlice';
import activePagesReducer from './activePageSlice';
import activeRootCategoryReducer from './activeRootCategorySlice';
import isModalReducer from './isModalSlice';
import menuReducer from './menu/menuSlice';

export const store = configureStore({
  reducer: {
    activePage: activePagesReducer,
    activeFilter: activeFilterReducer,
    activeRootCategory: activeRootCategoryReducer,
    isModal: isModalReducer,
    menu: menuReducer,
  },
});
