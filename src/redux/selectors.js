import { createSelector } from "@reduxjs/toolkit";

export const selectTasks = (state) => state.tasks.items;
export const selectFilter = (state) => state.filters.status;

export const setVisibleTasks = createSelector(
  [selectTasks, selectFilter],
  (tasks, filter) => {
    switch (filter) {
      case "active":
        return tasks.filter((item) => !item.completed);
      case "completed":
        return tasks.filter((item) => item.completed);

      default:
        return tasks;
    }
  }
);

export const statusCount = createSelector([selectTasks], (tasks) => {
  return tasks.reduce(
    (acc, item) => {
      if (item.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }

      return acc;
    },
    { active: 0, completed: 0 }
  );
});
