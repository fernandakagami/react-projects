import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './componentes/Menu';
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';
import Rodape from './componentes/Rodape';
import PaginaPadrao from "componentes/PaginaPadrao";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
        </Route>

        <Route path="*" element={<div>Página não encontrada.</div>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}


