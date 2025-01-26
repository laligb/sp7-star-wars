import { configureStore } from "@reduxjs/toolkit";
import starshipsReducer from "./slices/starshipsSlice";

export const store = configureStore({
  reducer: {
    starships: starshipsReducer,
  },
});
