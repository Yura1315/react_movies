import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PageSlice = {
  page: number;
};

const initialState: PageSlice = {
  page: 1,
};

const pageSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
});

export const { setPage } = pageSlice.actions;
export default pageSlice.reducer;
