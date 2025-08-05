import logo from "../assets/images/logo-bg.png";
import classes from "../styles/Nav.module.css";
import Account from "./Account";
import {Link} from "react-router-dom";

import React from 'react'

const Nav = () => {
  return (
  <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="Quiz-application" />
            <h3>Quiz-application</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  )
}

export default Nav
