import React from "react";
import { useDispatch } from "react-redux";
import { addHabitStatus } from "../../action";
import styles from "../../styles/home.module.css";

/* The code is defining a functional component called `ActionButton` that takes in a `props` object as
its parameter. It then extracts the `habit` property from the `props` object and assigns it to a
constant variable called `habit`. */
const ActionButton = (props) => {
  const { habit } = props;
  const dispatch = useDispatch();

 /**
  * The function `handleNoStatus` dispatches an action to add a habit status with an empty doneStatus
  * value.
  */
  const handleNoStatus = () => {
    const obj = {
      id: habit.id,
      doneStatus: "",
    };
    dispatch(addHabitStatus(obj));
  };

/**
 * The handleDoneStatus function dispatches an action to update the doneStatus of a habit to "done".
 */
  const handleDoneStatus = () => {
    const obj = {
      id: habit.id,
      doneStatus: "done",
    };
    dispatch(addHabitStatus(obj));
  };

/**
 * The function `handleNotDoneStatus` dispatches an action to update the done status of a habit to
 * "notdone".
 */
  const handleNotDoneStatus = () => {
    const obj = {
      id: habit.id,
      doneStatus: "notdone",
    };
    dispatch(addHabitStatus(obj));
  };
/* The code is defining the JSX (JavaScript XML) that will be rendered by the `ActionButton` component. */

  return (
    <div className={styles.habitCardAction}>
      {habit.doneStatus === "" && (
        <span className={styles.habitCardCheckIcon}>
          <i className="fa-regular fa-square" onClick={handleDoneStatus}></i>
        </span>
      )}

      {habit.doneStatus === "done" && (
        <span className={styles.habitCardCheckIcon}>
          <i
            className="fa-solid fa-square-check"
            onClick={handleNotDoneStatus}
          ></i>
        </span>
      )}

      {habit.doneStatus === "notdone" && (
        <span className={styles.habitCardCrossIcon}>
          <i class="fa-solid fa-square-xmark" onClick={handleNoStatus}></i>
        </span>
      )}
    </div>
  );
};

export default ActionButton;
