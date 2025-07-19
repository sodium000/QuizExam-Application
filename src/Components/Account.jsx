
import { Link } from "react-router-dom";
import classes from "../styles/Account.module.css";

// export default function Account() {
//   return (
//     <div className={classes.account}>
//       <span className="material-icons-outlined" title="Account">
//         account_circle
//       </span>
//         <span><Link to="/signup">Signup</Link>
//       <Link to="/login">Login</Link>
//       </span>

// //       {/* <span className="material-icons-outlined" title="Logout"> logout </span> */}
//     </div>
//   );
// }



import React from 'react'

const Account = () => {
  return (
   <>
     <div className={classes.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
            <Link to="/Signup" className={classes.text}>SignUp</Link>
            <Link to="/Login" className={classes.text}>Login</Link>
      {/* <span className="material-icons-outlined" title="Logout"> logout </span> */}
    </div>
   </>
  )
}

export default Account
 