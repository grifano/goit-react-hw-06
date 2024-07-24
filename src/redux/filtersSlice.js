import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: "",
  reducers: {
    searchByName(state, action) {
      return action.payload.toLowerCase();
    },
  },
});
export const { searchByName } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
