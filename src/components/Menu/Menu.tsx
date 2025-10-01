import { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden z-50 bg-[#29966a] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#76b99d] transition">
        Menu ▼
      </button>

      {isOpen && (
        <div className="md:hidden absolute right-0 mt-2 w-64 max-h-[80vh] overflow-y-auto bg-white border border-[#76b99d] rounded-md shadow-lg z-40 menu-dropdown">
          <nav className="p-4 space-y-2 text-[#194737] font-medium">
            <Link to="/">Home</Link>
            <Link to="/integrantes">Integrantes</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/oficinas">Oficinas</Link>
            <Link to="/perguntas-frequentes">Perguntas(FAQ)</Link>
            <Link to="/contato">Contato</Link>
          </nav>
        </div>
      )}

      <div className="hidden md:flex justify-end p-4 space-x-4 z-30 text-white font-medium menu-aberto">
        <Link to="/">Home</Link>
        <Link to="/integrantes">Integrantes</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/oficinas">Oficinas</Link>
        <Link to="/perguntas-frequentes">Perguntas(FAQ)</Link>
        <Link to="/contato">Contato</Link>
      </div>
    </div>
  );
}
