import { configureStore } from "@reduxjs/toolkit";

import tasksSlice from "./tasksSlice";
import filterSlice from "./filtersSlice";

const store = configureStore({
  reducer: {
    tasks: tasksSlice,
    filters: filterSlice,
  },
});

export default store;
