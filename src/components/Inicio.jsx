import Nav from "./Nav"
import '../assets/css/inicio.css'
import Deslizador from "./Deslizador"
import PruebaBaner from "./PruebaBaner"
import Alianzas from "./Alianzas"
import Footer from "./Footer"

const Inicio = () => {
  return (
    <>
        <Nav/>
        <PruebaBaner/> 
        <Deslizador/>
        <Alianzas/>
        <Footer/>
    </>
  )
}

export default Inicio