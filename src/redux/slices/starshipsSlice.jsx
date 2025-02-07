import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchStarships,
  fetchStarshipById,
  fetchPilotByUrl,
} from "../../api/starships";

// Async thunk to fetch starships (unchanged, just ensuring it's here)
export const getStarships = createAsyncThunk(
  "starships/fetchStarships",
  async (nextUrl = "https://swapi.dev/api/starships/") => {
    const data = await fetchStarships(nextUrl);
    return {
      items: data.results,
      next: data.next,
    };
  }
);

// Async thunk to fetch a single starship by ID and include pilots
export const getStarshipById = createAsyncThunk(
  "starships/fetchStarshipById",
  async (id) => {
    const data = await fetchStarshipById(id);

    // Fetch pilots separately
    const pilots = await Promise.all(
      (data.pilots || []).map(async (url) => await fetchPilotByUrl(url))
    );

    return { ...data, pilots }; // Add pilots to the starship object
  }
);

const starshipSlice = createSlice({
  name: "starships",
  initialState: {
    items: [],
    next: null,
    loading: false,
    error: null,
    selectedStarship: null, // Store selected starship with pilots
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handling starship list fetching
      .addCase(getStarships.pending, (state) => {
        state.loading = true;
      })
      .addCase(getStarships.fulfilled, (state, action) => {
        state.items = [...state.items, ...action.payload.items];
        state.next = action.payload.next;
        state.loading = false;
      })
      .addCase(getStarships.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Handling single starship fetching with pilots
      .addCase(getStarshipById.pending, (state) => {
        state.selectedStarship = null;
        state.loading = true;
      })
      .addCase(getStarshipById.fulfilled, (state, action) => {
        state.selectedStarship = action.payload;
        state.loading = false;
      })
      .addCase(getStarshipById.rejected, (state, action) => {
        state.selectedStarship = null;
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default starshipSlice.reducer;
