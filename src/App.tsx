import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";
import ScrollToTop from './components/ScrollTop/ScrollTop';
import './global.css';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Cabecalho />
      <ScrollToTop />

      <main className="flex-1">
        <Outlet />
      </main>

      <Rodape />
    </div>
  );
}
