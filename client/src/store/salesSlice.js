import { createSlice } from "@reduxjs/toolkit";
import { sendFormData, sendOrderData } from "./actionCreators";

const initialState = {
  status: "IDLE",
  error: null,
};

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendFormData.pending, (state) => {
        state.status = "PENDING";
        state.error = null;
      })
      .addCase(sendFormData.rejected, (state, action) => {
        state.status = "FAILED";
        state.error = action.payload;
      })
      .addCase(sendFormData.fulfilled, (state, action) => {
        state.status = "SUCCESS";
        state.error = null;
      });
    builder
      .addCase(sendOrderData.pending, (state) => {
        state.status = "PENDING";
        state.error = null;
      })
      .addCase(sendOrderData.rejected, (state, action) => {
        state.status = "FAILED";
        state.error = action.payload;
      })
      .addCase(sendOrderData.fulfilled, (state, action) => {
        state.status = "SUCCESS";
        state.error = null;
      });
  },
});

export default salesSlice.reducer;
