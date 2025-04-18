// Get all categories
export const getAllCategories = createAsyncThunk(
  "category/getAllCategories",
  async (thunkAPI) => {
    try {
      const response = await axios.get("/api/category");
      if (response.data.status === 200) {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.toString());
    }
  }
);