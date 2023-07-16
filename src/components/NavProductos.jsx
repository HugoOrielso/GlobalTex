import { NavLink } from "react-router-dom"
import '../assets/css/navProducts.css'
const NavProductos = () => {
  
  
  return (
    <>
      <section className="nav-categorías--products">
          <h2 className="title-nav-products">Categorías</h2>
          <ul className="cabecera-ul--products" >
            <div className="contenedorUno">

                  <NavLink to="/productos/cordonRedondo" className="link-products">
                      Cordón redondo
                  </NavLink>
                  <NavLink to="/productos/cordonPlano" className="link-products">
                      Cordón plano
                  </NavLink>
            </div>
            <div className="contenedorDos">
                  <NavLink to="/productos/cuellos" className="link-products">
                      Cuellos
                  </NavLink>
                  <NavLink to="/productos/otrosProductos" className="link-products">
                      Otros productos
                  </NavLink>

            </div>
          </ul>
      </section>
    </>
  )
}

export default NavProductos