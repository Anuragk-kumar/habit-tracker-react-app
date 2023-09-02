import React , { useState } from "react" ; 
import { useSelector, useDispatch } from "react-redux";
import styles from "../../styles/home.module.css";
import { addHabit } from "../../action";
import HabitCard  from "./HabitCard";


/* The code is defining a functional component called `Home`. */
const Home = () => {
  const [inputData , setInputData] = useState(''); 
   
  const habits = useSelector((state) => state.habitsReducer);
  console.log(habits);
  const dispatch = useDispatch() ;

 /**
  * The function `handleAddHabit` dispatches an action to add a habit with the value of `inputData` and
  * then resets `inputData` to an empty string.
  */
  const handleAddHabit = ()=>{
       dispatch(addHabit(inputData)) ; 
       setInputData('') ; 
  }
  
/* The `return` statement in the `Home` component is returning JSX code that will be rendered as HTML. */
  return (
    <div className={styles.container}>
         <div className={styles.todaysDate}>
              {}
         </div>
         <div className={styles.addHabit}>
                 <input type="text" placeholder="Add Habit..." value={inputData} onChange={(event)=>setInputData(event.target.value)} />
                 <i class="fa-solid fa-plus" onClick={handleAddHabit} ></i>
         </div>
      <div className={styles.listHabit}> 
        { habits.list.map((habit)=>(
          <HabitCard habit={habit} key={habit.id}  />
        ))
        }
      </div>
     
    </div>
  );
};

export default Home;
