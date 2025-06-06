import { configureStore } from "@reduxjs/toolkit";
import seatSlice from "./slices/seatSlice";

const store = configureStore({
  reducer: {
    seatSlice,
  },
  devTools: true,
});

export default store;
