import { Routes, Route } from "react-router-dom"
import Perfil from './components/layouts/perfil/perfil.jsx'
import Navbar from './components/layouts/navbar.jsx'
import Home from "./components/layouts/home.jsx"
import "./styles/App.css"

export default function App() {
  return (
    <>
      <Perfil />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <Navbar />
    </>
  )
}
