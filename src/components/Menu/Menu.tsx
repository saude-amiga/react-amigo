import { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Botão para mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden z-50 bg-blue-600 text-white px-4 py-3 rounded-md"
      >
        Menu ▼
      </button>

      {/* Dropdown para mobile */}
      {isOpen && (
        <div className="md:hidden right-4 w-64 max-h-[80vh] overflow-y-auto bg-white border rounded-md shadow-lg z-40">
          <nav className="p-4 space-y-2">
            <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Home</Link>
            <Link to="/quem-somos" className="block px-4 py-2 hover:bg-gray-100">Quem Somos</Link>
            <Link to="/saude-amiga" className="block px-4 py-2 hover:bg-gray-100">Saúde Amiga</Link>
            <Link to="/oficinas" className="block px-4 py-2 hover:bg-gray-100">Oficinas</Link>
            <Link to="/perguntas-frequentes" className="block px-4 py-2 hover:bg-gray-100">FAQ - Perguntas Frequentes</Link>
            <Link to="/contato" className="block px-4 py-2 hover:bg-gray-100">Contato</Link>
          </nav>
        </div>
      )}

      {/* Menu fixo para telas maiores */}
      <div className="hidden md:block fixed right-0 top-0 h-screen w-64 overflow-y-auto bg-white shadow-lg z-30">
        <nav className="p-4 space-y-2">
          <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Home</Link>
          <Link to="/quem-somos" className="block px-4 py-2 hover:bg-gray-100">Quem Somos</Link>
          <Link to="/saude-amiga" className="block px-4 py-2 hover:bg-gray-100">Saúde Amiga</Link>
          <Link to="/oficinas" className="block px-4 py-2 hover:bg-gray-100">Oficinas</Link>
          <Link to="/perguntas-frequentes" className="block px-4 py-2 hover:bg-gray-100">FAQ - Perguntas Frequentes</Link>
          <Link to="/contato" className="block px-4 py-2 hover:bg-gray-100">Contato</Link>
        </nav>
      </div>
    </div>
  );
}
