import { configureStore } from '@reduxjs/toolkit';
import activeFilterReducer from './activeFilterSlice';
import activePagesReducer from './activePageSlice';
import isModalReducer from './isModalSlice';
import kithenMenuRdeucer from './menuList/menuListSlice';

export const store = configureStore({
  reducer: {
    activePage: activePagesReducer,
    activeFilter: activeFilterReducer,
    isModal: isModalReducer,
    kitchenMenu: kithenMenuRdeucer,
  },
});
