import classes from "../styles/Layout.module.css";
import Nav from "./Nav";
// import home from "../Components/pages/HomePage"

import React from 'react'

const Layout = ({children}) => {
  return (
    <>
    <Nav/>
       <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>

    </>
  )
}

export default Layout
