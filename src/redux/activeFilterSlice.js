import { createSlice } from '@reduxjs/toolkit';

const activeFilterSlice = createSlice({
  name: 'activeFilter',
  initialState: '',
  reducers: {
    setActiveFilter(_, action) {
      return action.payload;
    },
  },
});
export const { setActiveFilter } = activeFilterSlice.actions;
export default activeFilterSlice.reducer;
