import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./navbar.module.css";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { to: "/home", label: "Home" },
    { to: "/portifolio", label: "Portifólio" },
  ];

  return (
    <nav className={styles.navbar}>
      {links.map((link) => {
        const isActive = location.pathname === link.to;

        return (
          <div key={link.to} className={styles.linkWrapper} style={{ position: "relative" }}>
            <Link
              to={link.to}
              className={`${styles.elemento} ${isActive ? styles.active : ""}`}
            >
              {link.label}
            </Link>

            {/* Quadrado animado */}
            {isActive && (
              <motion.div
                layoutId="activeIndicator"
                className={styles.activeIndicator}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </div>
        );
      })}
    </nav>
  );
}
