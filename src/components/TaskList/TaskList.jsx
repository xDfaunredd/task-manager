import { useDispatch, useSelector } from "react-redux";
import { Task } from "../Task/Task";
import css from "./TaskList.module.css";
import { setVisibleTasks } from "../../redux/selectors";
import { useEffect } from "react";
import { fetchTasks } from "../../redux/operations";

export const TaskList = () => {
  const visibleTasks = useSelector(setVisibleTasks);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
