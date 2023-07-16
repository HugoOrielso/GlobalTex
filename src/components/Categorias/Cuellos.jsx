import Footer from "../Footer"
import Nav from "../Nav"
import '../../assets/css/productos.css'
import { Link } from "react-router-dom"
const URL = "https://wa.me/573233062578?text="
import swal from 'sweetalert2';
import NavProductos from "../NavProductos"

const cuellos = [
    {
        "nombre": "Cuello",
        "imagen": "/productsImages/cuellos/cuelloUno.jpg",
        "refencia": "uno"
    },
    {
        "nombre": "Cuello",
        "imagen": "/productsImages/cuellos/cuelloDos.jpg",
        "referencia": "dos"
    },
    {
        "nombre": "Cuello",
        "imagen": "/productsImages/cuellos/cuelloTres.jpg",
        "referencia": "Tres"
    },
    {
        "nombre": "Cuello",
        "imagen": "/productsImages/cuellos/cuelloCuatro.jpg",
        "referencia": "Cuatro"
    },
    {
        "nombre": "Cuello",
        "imagen": "/productsImages/cuellos/cuelloCinco.jpg",
        "referencia": "Cinco"
    },
    {
        "nombre": "Cuello",
        "imagen": "/productsImages/cuellos/cuelloSeis.jpg",
        "referencia": "Seis"
    },
    {
        "nombre": "Cuello",
        "imagen": "/productsImages/cuellos/cuelloSiete.jpg",
        "referencia": "Siete"
    },
    {
        "nombre": "Cuello",
        "imagen": "/productsImages/cuellos/cuelloOcho.jpg",
        "referencia": "Ocho"
    },
    {
        "nombre": "Cuello",
        "imagen": "/productsImages/cuellos/cuelloNueve.jpg",
        "referencia": "Nueve"
    }
]
const Cuellos = () => {
    const modal = (imagen,alt)=>{
        if(window.innerWidth < 768){
            swal.fire({
                imageUrl: imagen,
                imageHeight: 180,
                imageWidth: 280,
                imageAlt: alt
            })
        }else{
            swal.fire({
                imageUrl: imagen,
                imageHeight: 350,
                imageWidth: 440,
                imageAlt: alt
            })
        }
    }
  return (
    <>
    <Nav/>
    <section className='container-return-navProducts'>
        <NavProductos/>
        <div className="container-btn--return">
            <Link to="/productos" className="btn-volver">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="retornar" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                </svg>
            </Link>
        </div>
    </section>
    
    <main className='container-products '>
        {cuellos.map((producto, index) =>(
            <div className="recuadro-producto" key={index}>
               <p className="titulo"> {producto.nombre.length >=28 ? producto.nombre.slice(0,27) : producto.nombre} referencia {index + 1}</p>                
               <div className="container-cuellos">
                <img className={producto.nombre + " cuellos"} src={producto.imagen} alt={producto.nombre}></img>
               </div>
               <div className="container-button">
                  <a className="boton-mas" href={URL + `Hola%20me%20interesa%20el%20producto%20cuello%20referenencia:%20${producto.refencia},%20de%20tu%20tienda`} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg>
                  <p className="saber-mas">Saber más</p>
                  </a>
                  <button className='modal-button' onClick={() => modal(producto.imagen, producto.nombre)}>Ver imágen</button>
               </div>
            </div> 
        ))}
    </main>
    <Footer/>
    </>
  )
}

export default Cuellos