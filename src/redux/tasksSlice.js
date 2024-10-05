import { createSlice } from "@reduxjs/toolkit";
import { addTask, deleteTask, fetchTasks, setTaskToggle } from "./operations";

const initialState = {
  isProcessing: false,
  items: [],
  error: null,
};

const pendingProcessing = (state) => {
  state.isProcessing = true;
};

const rejectedError = (state, action) => {
  state.error = action.payload;
};

const slice = createSlice({
  name: "tasks",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchTasks.pending, pendingProcessing)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isProcessing = false;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, rejectedError)
      .addCase(addTask.pending, pendingProcessing)
      .addCase(addTask.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteTask.rejected, rejectedError)
      .addCase(deleteTask.pending, pendingProcessing)
      .addCase(deleteTask.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );

        state.items.splice(index, 1);
      })
      .addCase(addTask.rejected, rejectedError)
      .addCase(setTaskToggle.pending, pendingProcessing)
      .addCase(setTaskToggle.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addCase(setTaskToggle.rejected, rejectedError),
});

export default slice.reducer;
