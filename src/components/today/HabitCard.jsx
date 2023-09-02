import React from "react";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../../action";
import styles from "../../styles/home.module.css";
import ActionButton from "./ActionButton";

/* The code block is defining a functional component called `HabitCard` that takes in `props` as its
parameter. Within the component, it extracts the `habit` property from the `props` object using
destructuring assignment. */
const HabitCard = (props) => {
  const { habit } = props;
  var target = 5 ; 
  var progress = 0  ; 

  for(let i= 0 ; i < 6 ; i++){
    if(habit.weekdays[i].doneStatus === "done"){
      progress++ ; 
    }
  }
  /* `const dispatch = useDispatch();` is using the `useDispatch` hook from the `react-redux` library
  to get a reference to the `dispatch` function. The `dispatch` function is used to dispatch actions
  to the Redux store. In this case, it is used to dispatch the `deleteHabit` action with the habit's
  id as the payload when the `handleDeleteHabit` function is called. */
  const dispatch = useDispatch();
/**
 * The handleDeleteHabit function dispatches a deleteHabit action with the habit's id as the payload.
 */

  const handleDeleteHabit = () => {
    dispatch(deleteHabit(habit.id));
  };

 /* The `return` statement in the `HabitCard` component is returning JSX code that will be rendered as
 HTML by React. */
  return (
    <div className={styles.habitCardContainer}>
      <div className={styles.habitCard}>
        <div className={styles.habitCardTitle}>
          <div className={styles.habitActionName}>
            <span>
              <ActionButton habit={habit} />
            </span>
            <span className={styles.cardName}>
               { `:   ${habit.name}` }
            </span>
          </div>
          <div>
          <i className="fa-solid fa-trash" onClick={handleDeleteHabit}></i>
          </div>

        </div>

        <div className={styles.weeklyProgress}>
          <span>Target : {target} days / week</span>
          <span>Progress :{progress}  / {target} </span>
        </div>
      </div>
    </div>
  );
};

export default HabitCard;
