import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchStarships } from "../../api/starships";

export const getStarships = createAsyncThunk(
  "starships/fetchStarships",
  async () => {
    const data = await fetchStarships();
    console.log(data);
    return data;
  }
);

const starshipSlice = createSlice({
  name: "starships",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStarships.pending, (state) => {
        state.loading = true;
      })
      .addCase(getStarships.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(getStarships.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default starshipSlice.reducer;
