import { NavLink } from "react-router-dom"
import '../assets/css/nav.css'
import { useState } from "react"
import logoGlobalDos from '../assets/Imagenes/logoDosBg.png'
const Nav = () => {
    const [menu, setMenu] = useState(false)
    const toggleMenu = () => {
        setMenu(!menu)
    }
  return (
    <header className="cabecera">
        <div className="cabecera-logo">
            <NavLink to="/" className="">
                <img src={logoGlobalDos} alt="Logo Empresa" className="cabecera-imagen"/>
            </NavLink>
        </div>    
        <button 
            onClick={toggleMenu}
            className="cabecera-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="cabecera-svg" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
        </button>
        <nav className={`cabecera-nav ${menu ? "isActive" : ""} `}>
            <ul className="cabecera-ul">
                <li className="menu-lista">
                    <NavLink to="/" className="cabecera-li">
                        <span>Inicio</span>
                    </NavLink>
                </li>
                <li className="menu-lista">
                    <NavLink to="/productos" className="cabecera-li">
                        <span>Catálogo</span>
                    </NavLink>
                </li>
                <li className="menu-lista">
                    <NavLink to="/nosotros" className="cabecera-li">
                        <span>Sobre nosotros</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Nav