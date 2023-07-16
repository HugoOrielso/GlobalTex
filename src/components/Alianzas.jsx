import '../assets/css/alianzas.css';
import yloshoes from '../assets/logos/yloshoes.png';
import saga from '../assets/logos/saga.png';
import valsu from '../assets/logos/valsu.png';
import nova from '../assets/logos/logo-gruponova.svg';
import decoracion from '../assets/Imagenes/Recursos-maquetacion/bubble-26.png';
import decoracionDos from '../assets/Imagenes/Recursos-maquetacion/bubble-15.png';

const Alianzas = () => {
  return (
    <section className='alianzas'>
        <img src={decoracion} alt="" className='img-decoración' />
      <div className="container">
        <div className="titles">
          <h3 className='generando-confianza'>Generando confianza</h3>
          <h1 className='nuestros-aliados'>Algunos de nuestros aliados Comerciales</h1>
        </div>
        <div className="container-cards">
          <div className="box-primary">
            <img src={yloshoes} alt="" className='img-alianza' />
            <a className='btn-mas-empresa-aliada' href="https://yloshoes.com/" target='_blank' rel='noreferrer'>Saber más</a>
          </div>
          <div className="box-primary">
            <img src={saga} alt="" className='img-alianza saga' />
            <a className='btn-mas-empresa-aliada' href="https://www.botasaga.com/app/empresa.php" target='_blank' rel='noreferrer'>Saber más</a>
          </div>
          <div className="box-primary">
            <img src={valsu} alt="" className='img-alianza' />
            <a className='btn-mas-empresa-aliada' href="https://www.valsu.com.co/" target='_blank' rel='noreferrer'>Saber más</a>
          </div>
          <div className="box-primary">
            <img src={nova} alt="" className='img-alianza' />
            <a className='btn-mas-empresa-aliada' href="https://gruponova.co/" target='_blank' rel='noreferrer'>Saber más</a>
          </div>
        </div>
      </div>
      <img src={decoracionDos} alt="" className='img-decoración-Dos' />
    </section>
  )
}

export default Alianzas;
