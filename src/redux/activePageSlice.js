import { createSlice } from '@reduxjs/toolkit';

const activePageSlice = createSlice({
  name: 'activePage',
  initialState: 'ЗАКУСКИ',
  reducers: {
    setActivePage(_, action) {
      return action.payload;
    },
  },
});
export const { setActivePage } = activePageSlice.actions;
export default activePageSlice.reducer;
