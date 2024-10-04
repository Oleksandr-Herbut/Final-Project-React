import { createSlice } from "@reduxjs/toolkit";
import { register } from "./discountActions";

const discountSlice = createSlice({
  name: "discount",
  initialState: {
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.success = false;
      })
      .addCase(register.fulfilled, (state) => {
        state.status = "succeeded";
        state.error = null;
        state.success = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.success = false;
      });
  },
});

export default discountSlice.reducer;
