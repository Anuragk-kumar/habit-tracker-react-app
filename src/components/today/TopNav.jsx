import React from 'react' ; 
import { Link } from 'react-router-dom';
import styles from '../../styles/topnav.module.css' ; 
/* The code is creating a functional component called `TopNav`. Inside the component, it is creating a
new `Date` object and storing it in the variable `d`. Then, it is calling the `toDateString()`
method on the `d` object and storing the result in the variable `d1`. This will give the current
date in a string format. */

const TopNav = () => {
  const d = new Date();
  const d1 = d.toDateString() ; 


/* The `return` statement is returning JSX (JavaScript XML) code, which represents the structure and
content of the component's rendered output. In this case, it is returning a `<div>` element with the
class name `styles.topnav`, which is defined in an external CSS module. */
  return (
    <div className={styles.topnav}>   
        <div className={styles.navLeft}>
          <div className={styles.navLeftElem}>
            <Link className={styles.decorationLogo} to='/'> Habit Tracker React </Link>
          </div>

          <div className={styles.navLeftElem}>
            <Link className={styles.decoration} to='/'> Home  </Link>
          </div>

          <div className={styles.navLeftElem}>
            <Link className={styles.decoration} to='/weekly'> Weekly </Link>
          </div>
        </div>

        <div className={styles.navRightElem}>
          {`${d1}`}
        </div>
    </div>
  )
}

export default TopNav ; 