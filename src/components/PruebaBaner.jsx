import img from '../assets/Imagenes/fraseCompleto.png';

const PruebaBaner = () => {
  return (
    <section className='prueba-baner' style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", overflow: "hidden", height: "auto" }}>
      <img src={img} alt="banner-global" className='banner-global' style={{ width: "105%", border: "none", height: "auto"}} />
    </section>
  );
};

export default PruebaBaner;
