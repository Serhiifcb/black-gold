import { createSlice } from '@reduxjs/toolkit';
import { fetchMenu, fetchMenuList } from './menuOperations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState: { categories: [], menuList: [], isLoading: false, error: null },
  extraReducers: {
    [fetchMenu.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.categories = action.payload;
    },
    [fetchMenu.pending]: handlePending,
    [fetchMenu.rejected]: handleRejected,
    [fetchMenuList.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.menuList = action.payload;
    },
    [fetchMenuList.pending]: handlePending,
    [fetchMenuList.rejected]: handleRejected,
  },
});

export default menuSlice.reducer;
