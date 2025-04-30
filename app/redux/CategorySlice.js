import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch categories
export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/category");
      console.log('response',response)
      if (response.status === 200) {
        return thunkAPI.fulfillWithValue(response.data);
      } else {
        return thunkAPI.rejectWithValue(response.data || {message: "Something went wrong"});
      }
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.toString());
    }
  }
);

const CategorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default CategorySlice.reducer;