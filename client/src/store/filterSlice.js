import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: { from: 0, to: 1000 },
  sort: "by default",
  isDiscount: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => (state = action.payload),
    toggleDiscount: (state, action) => {
      state.isDiscount = action.payload;
    },
  },
});
export default filterSlice.reducer;
export const { setFilter, toggleDiscount } = filterSlice.actions;
