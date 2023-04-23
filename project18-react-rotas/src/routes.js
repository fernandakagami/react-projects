import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./componentes/Menu";
import Home from './paginas/Home';
import SobreMim from './paginas/SobreMim';
import PaginaPadrao from "./componentes/PaginaPadrao";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;