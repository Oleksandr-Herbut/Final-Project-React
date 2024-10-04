import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const baseUrl = "http://localhost:3333/";

export const getCategories = createAsyncThunk(
  "categories/getCategories",

  async () => {
    try {
      const response = await axios.get(`${baseUrl}categories/all`);
      return response.data;
    } catch (error) {
      console.log(error.massage);
      throw new Error(error.massage);
    }
  }
);

export const getProducts = createAsyncThunk(
  "products/getProducts",

  async () => {
    try {
      const response = await axios.get(`${baseUrl}products/all`);
      return response.data;
    } catch (error) {
      console.log(error.massage);
      throw new Error(error.massage);
    }
  }
);

export const getProductsByCategory = createAsyncThunk(
  "categories/getProductsByCategory",

  async (categoryId) => {
    try {
      const response = await axios.get(`${baseUrl}categories/${categoryId}`);
      return response.data;
    } catch (error) {
      console.log(error.massage);
      throw new Error(error.massage);
    }
  }
);
export const getCategoryName = createAsyncThunk(
  "categories/getCategories",
  async (id) => {
    try {
      const response = await axios.get(`${baseUrl}categories/id`);

      return response.data.category.title;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }
);

export const sendFormData = createAsyncThunk(
  "sale/sendFormData",
  async (data) => {
    try {
      const response = await axios.post(`${baseUrl}sale/send`, { data });
      return response.data;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }
);

export const sendOrderData = createAsyncThunk(
  "sale/sendOrderData",
  async (data) => {
    try {
      const response = await axios.post(`${baseUrl}order/send`, { data });
      return response.data;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }
);
