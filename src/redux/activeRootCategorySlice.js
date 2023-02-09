import { createSlice } from '@reduxjs/toolkit';

const activeRootCategorySlice = createSlice({
  name: 'activeRootCategory',
  initialState: 'МЕНЮ КУХНІ',
  reducers: {
    setActiveRootCategory(_, action) {
      return action.payload;
    },
  },
});
export const { setActiveRootCategory } = activeRootCategorySlice.actions;
export default activeRootCategorySlice.reducer;
