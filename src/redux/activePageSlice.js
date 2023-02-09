import { createSlice } from '@reduxjs/toolkit';

const activePageSlice = createSlice({
  name: 'activePage',
  initialState: { id: 5, name: 'ЗАКУСКИ' },
  reducers: {
    setActivePage(state, action) {
      state.name = action.payload;
    },
    setActiveId(state, action) {
      state.id = action.payload;
    },
  },
});
export const { setActivePage, setActiveId } = activePageSlice.actions;
export default activePageSlice.reducer;
