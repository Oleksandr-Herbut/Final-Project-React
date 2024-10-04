import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "http://localhost:3333/";

export const register = createAsyncThunk(
  "sale/send",
  async ({ email, phone, name }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${apiUrl}sale/send`, {
        email,
        phone,
        name,
      });
      return response.data;
    } catch (error) {
      console.log(error);

      return rejectWithValue(error.response.data.msg);
    }
  }
);
