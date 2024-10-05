import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "all",
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilterStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export default slice.reducer;
export const { setFilterStatus } = slice.actions;
