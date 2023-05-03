import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home';
import Register from './pages/Register';
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
  return (
    <BrowserRouter>     
      <Header />
        
      <Routes>
        <Route index element={<Home />} />        
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
