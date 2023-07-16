import Nav from "./Nav"
import '../assets/css/productos.css'
import Footer from "./Footer"
import NavProductos from "./NavProductos"
const imagenes = [
  {
    "nombre": "Poliester",
    "imagen": "./productsImages/paletaColoresPoliester.jpg"
  },
  {
    "nombre": "Nylon",
    "imagen": "./productsImages/paletaColoresNylon.jpg"
  }
]
const Productos = () => {
  return (
    <>
        <Nav/>
            <NavProductos/>   
        <main className="section-principal--productos">
          <section className="bienvenida-principal">
            <h2>Bienvenido/a a nuestra sección de productos</h2>
            <p className="bienvenida">Descubre nuestra amplia variedad de productos especializados para la industria del calzado. Encuentra cordones, cauchos, clisés y plantillas de zapatos de alta calidad, diseñados para cumplir con tus necesidades y superar tus expectativas.</p>
            <p className="bienvenida">Nuestro equipo altamente capacitado se esfuerza por ofrecerte productos innovadores que combinan estilo, durabilidad y comodidad. Utilizamos tecnología de vanguardia y seguimos estrictos estándares de calidad en cada etapa de producción.</p>
            <p className="bienvenida">Explora nuestra sección de productos y encuentra exactamente lo que necesitas para la fabricación y personalización de zapatos. Si tienes alguna pregunta o necesitas asistencia adicional, nuestro equipo está aquí para ayudarte.</p>
            <p className="bienvenida">¡Gracias por visitarnos!</p>
            <p className="bienvenida">Atentamente,<b> El equipo GlobalTex</b> </p>
            <div className="descripcion-colores">
              <h3>Manejamos una gran cantidad de colores para personalizar tus productos</h3>
              <div className="paletas-productos">
                {imagenes.map((imagen,index)=>{
                  return(
                    <div className={"paleta-"+imagen.nombre + " container-imagen--paleta"} key={index}>
                      <img src={imagen.imagen} alt={imagen.nombre} className="imagen-paleta"/>
                    </div>
                  )
                })
              }
              </div>
            </div>
          </section>
        </main>
        <Footer/>
    </>
  )
}

export default Productos