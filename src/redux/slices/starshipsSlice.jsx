import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchStarships } from "../../api/starships";

export const getStarships = createAsyncThunk(
  "starships/fetchStarships",
  async (nextUrl = "https://swapi.dev/api/starships/") => {
    const data = await fetchStarships(nextUrl);
    console.log(data);
    return {
      items: data.results,
      next: data.next,
    };
  }
);

const starshipSlice = createSlice({
  name: "starships",
  initialState: {
    items: [],
    next: null,
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
        console.log("Next URL:", action.payload.next);
        state.items = [...state.items, ...action.payload.items];
        state.next = action.payload.next;
        state.loading = false;
      })
      .addCase(getStarships.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default starshipSlice.reducer;
