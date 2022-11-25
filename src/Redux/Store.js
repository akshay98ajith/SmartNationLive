import { configureStore } from "@reduxjs/toolkit";
import exampleCounterSlice from "./exampleCounterSlice";

export default configureStore({
  reducer: {
    counter: exampleCounterSlice,
  },
});
