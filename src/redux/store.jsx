import { configureStore } from "@reduxjs/toolkit";
import starshipsReducer from "./slices/starshipsSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    starships: starshipsReducer,
    auth: authReducer,
  },
});
