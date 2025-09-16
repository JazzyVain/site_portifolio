import React from "react";
import {Link, useLocation} from "react-router-dom"
import styles from "./navbar.module.css"

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className={styles.navbar}>
      <Link 
        to="/home" 
        className={location.pathname === "/home" ? `${styles.active} ${styles.elemento}` : styles.elemento}
      >
        Home
      </Link>
    </nav>
)}