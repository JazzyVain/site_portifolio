import React from "react";
// import { useEffect, useState } from "react";
import styles from "./home.module.css"

/*  
export default function Home() {
  const [ID, setID] = useState([])

  useEffect(() => {
    // código que roda uma vez quando o componente monta
    fetch("https://api.github.com/users/JazzyVain")
      .then(res => res.json())
      .then(data => {
        const simplified = data.login
        setID(simplified)
      })
  }, []) // <- array vazio = executa só uma vez


  return (
    <div className={styles.container}>
      <p>{ID}</p>
    </div>
    
  )
}
 */

export default function Home() {
  return (
    <h1>Olá</h1>
  )
}