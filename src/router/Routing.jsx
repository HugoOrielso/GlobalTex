import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Inicio from '../components/Inicio';
import Productos from '../components/Productos';
import Nosotros from '../components/Nosotros';
import CordonRendodo from '../components/Categorias/CordonRendodo';
import CordonPlano from '../components/Categorias/CordonPlano';
import OtrosProductos from '../components/Categorias/OtrosProductos';
import Cuellos from '../components/Categorias/Cuellos';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/productos/cordonRedondo" element={<CordonRendodo />} />
        <Route path="/productos/cordonPlano" element={<CordonPlano />} />
        <Route path="/productos/cuellos" element={<Cuellos />} />
        <Route path="/productos/otrosProductos" element={<OtrosProductos />} />
        <Route path="*" element={
          <>
            <p>
              <h1>Error 404</h1>
              <Link to="/">Volver al inicio</Link>
            </p>
          </>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
