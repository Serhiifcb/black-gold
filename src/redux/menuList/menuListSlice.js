import { createSlice } from '@reduxjs/toolkit';
import { fetchKitchenMenu } from './menuListOperations';
// import { toast } from 'react-toastify';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const kithenMenuSlice = createSlice({
  name: 'kitchenMenu',
  initialState: { menu: [], isLoading: false, error: null },
  extraReducers: {
    [fetchKitchenMenu.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchKitchenMenu.pending]: handlePending,
    [fetchKitchenMenu.rejected]: handleRejected,
  },
});

export default kithenMenuSlice.reducer;
