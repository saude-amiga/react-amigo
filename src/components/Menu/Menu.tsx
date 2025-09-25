import { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Botão para mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden z-50 bg-blue-600 text-white px-4 py-3 rounded-md"
      >
        Menu ▼
      </button>

      {/* Dropdown para mobile (flutuante) */}
      {isOpen && (
        <div className="md:hidden absolute right-0 mt-2 w-64 max-h-[80vh] overflow-y-auto bg-white border rounded-md shadow-lg z-40">
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

      {/* Menu horizontal para telas maiores */}
      <div className="hidden md:flex justify-end p-4 space-x-4 z-30">
        <Link to="/" className="px-4 py-2 hover:bg-gray-100 rounded-md">Home</Link>
        <Link to="/quem-somos" className="px-4 py-2 hover:bg-gray-100 rounded-md">Quem Somos</Link>
        <Link to="/saude-amiga" className="px-4 py-2 hover:bg-gray-100 rounded-md">Saúde Amiga</Link>
        <Link to="/oficinas" className="px-4 py-2 hover:bg-gray-100 rounded-md">Oficinas</Link>
        <Link to="/perguntas-frequentes" className="px-4 py-2 hover:bg-gray-100 rounded-md">FAQ - Perguntas Frequentes</Link>
        <Link to="/contato" className="px-4 py-2 hover:bg-gray-100 rounded-md">Contato</Link>
      </div>
    </div>
  );
}
    