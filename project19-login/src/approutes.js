import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
//import Lista from './paginas/Lista';
//import Cadastro from './paginas/Cadastro';
//import NaoEncontrada from "paginas/NaoEncontrada";

export default function AppRoutes() {
  return (
    <BrowserRouter>     
      <Header />

      <Footer />
    </BrowserRouter>
  );
}
