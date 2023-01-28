import { createSlice } from '@reduxjs/toolkit';

const isModalSlice = createSlice({
  name: 'isModal',
  initialState: false,
  reducers: {
    setIsModal(_, action) {
      return action.payload;
    },
  },
});
export const { setIsModal } = isModalSlice.actions;
export default isModalSlice.reducer;
