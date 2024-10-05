import { useSelector } from "react-redux";
import css from "./TaskCounter.module.css";
import { statusCount } from "../../redux/selectors";

export const TaskCounter = () => {
  const counter = useSelector(statusCount);

  return (
    <div>
      <p className={css.text}>Active: {counter.active}</p>
      <p className={css.text}>Completed: {counter.completed}</p>
    </div>
  );
};
