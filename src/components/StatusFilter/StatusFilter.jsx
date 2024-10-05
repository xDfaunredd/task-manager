import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";
import { selectFilter } from "../../redux/selectors";
import { setFilterStatus } from "../../redux/filtersSlice";

export const StatusFilter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleClick = (filter) => {
    dispatch(setFilterStatus(filter));
  };

  return (
    <div className={css.wrapper}>
      <Button onClick={() => handleClick("all")} selected={filter === "all"}>
        All
      </Button>
      <Button
        onClick={() => handleClick("active")}
        selected={filter === "active"}
      >
        Active
      </Button>
      <Button
        onClick={() => handleClick("completed")}
        selected={filter === "completed"}
      >
        Completed
      </Button>
    </div>
  );
};
