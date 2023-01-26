import { createSlice } from '@reduxjs/toolkit';

const activePageSlice = createSlice({
  name: 'activePage',
  initialState: 'Піца',
  reducers: {
    setActivePage(state, action) {
      return action.payload;
    },
  },
});
export const { setActivePage } = activePageSlice.actions;
export default activePageSlice.reducer;
