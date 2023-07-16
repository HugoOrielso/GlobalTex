import Nav from './Nav'
import '../assets/css/nosotros.css'
import Footer from "./Footer"
import Mapa from './Mapa'
import FormContacto from './FormContacto'
const Nosotros = () => {
  return (
    <>
    <Nav/>
      <main className='nosotros'>
        <section className='mision-vision'>
          <div className='blur-decoracion'></div>
          <div className='mision'>
            <h1 className='titulo-principal'>Misión</h1>
            <div className='parrafo-nosotros'>En GlobalTex, nos dedicamos a ser líderes en la producción y suministro de productos de calidad para la industria del calzado y confección. Nuestro compromiso es ofrecer a nuestros clientes cordones, cauchos, clisés y plantillas de zapatos innovadores, duraderos y con un alto nivel de confort. </div>
            <div className='parrafo-nosotros'> Trabajamos en estrecha colaboración con nuestros socios comerciales para asegurar la satisfacción de sus necesidades, brindando soluciones confiables y cumpliendo con los más altos estándares de calidad. Nuestro objetivo es ser reconocidos como un referente de excelencia y confianza en nuestro sector.</div>
            
          </div>
          <div className='vision'>
            <h1 className='titulo-principal'>Visión</h1>
            <div>En GlobalTex, nos esforzamos por ser la empresa líder a nivel nacional en la producción y distribución de productos para la industria del calzado y confección. Buscamos expandir nuestra presencia global, estableciendo alianzas estratégicas con clientes y proveedores en todo el mundo. Nuestro enfoque se centra en la innovación constante, la mejora continua de nuestros procesos y la adopción de tecnologías avanzadas para ofrecer productos de vanguardia que superen las expectativas de nuestros clientes.</div>

            <div> Aspiramos a ser reconocidos por nuestra excelencia en calidad, servicio al cliente y compromiso con el desarrollo sostenible. Trabajamos con pasión y dedicación para contribuir al éxito y crecimiento de nuestros clientes y colaboradores, generando un impacto positivo en la industria del calzado y confección.</div>
          </div>
          <div className='blur-decoracionDos'></div>
        </section>
      </main>
      <section className='mapa'>
        <Mapa/>
      </section>
      <FormContacto/>
      <Footer/>
    </>
  )
}

export default Nosotros