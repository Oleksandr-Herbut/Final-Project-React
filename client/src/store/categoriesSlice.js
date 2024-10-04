import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../store/actionCreators";

const initialState = {
  status: "IDLE",
  categories: [],
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.status = "PENDING";
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.status = "SUCCESS";
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.status = "FAILED";
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
