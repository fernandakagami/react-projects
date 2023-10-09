import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./componentes/Menu";
import Rodape from "./componentes/Rodape";
import Inicio from './paginas/Inicio';
import SobreMim from "./paginas/SobreMim";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "./paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />          
        </Route>

        <Route path="/posts/:id" element={<Post />} />

        <Route path="*" element={<NaoEncontrada/>}></Route>
      </Routes>

      <Rodape></Rodape>
    </BrowserRouter>
  )
}

export default AppRoutes;
