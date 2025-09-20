import { Routes, Route } from "react-router-dom"
import Perfil from './components/layouts/perfil/perfil.jsx'
import Navbar from './components/layouts/navbar.jsx'
import Home from "./components/layouts/home.jsx"
import Port from "./components/layouts/portifolio.jsx"
import "./styles/App.css"

export default function App() {
  return (
    <>
        <Navbar />
        <Perfil />
      <div className="bloco">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/portifolio" element={<Port />} />
        </Routes>
      </div>
    </>
  )
}
