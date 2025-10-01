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
        <div className="md:hidden absolute right-0 mt-2 w-64 max-h-[80vh] overflow-y-auto bg-white border border-[#76b99d] rounded-md shadow-lg z-40">
          <nav className="p-4 space-y-2 text-[#194737] font-medium">
            <Link to="/" className="block px-4 py-2 rounded hover:bg-[#76b99d] hover:text-white transition">Home</Link>
            <Link to="/quem-somos" className="block px-4 py-2 rounded hover:bg-[#76b99d] hover:text-white transition">Integrantes</Link>
            <Link to="/sobre" className="block px-4 py-2 rounded hover:bg-[#76b99d] hover:text-white transition">Sobre</Link>
            <Link to="/oficinas" className="block px-4 py-2 rounded hover:bg-[#76b99d] hover:text-white transition">Oficinas</Link>
            <Link to="/perguntas-frequentes" className="block px-4 py-2 rounded hover:bg-[#76b99d] hover:text-white transition">Perguntas</Link>
            <Link to="/contato" className="block px-4 py-2 rounded hover:bg-[#76b99d] hover:text-white transition">Contato</Link>
          </nav>
        </div>
      )}

      <div className="hidden md:flex justify-end p-4 space-x-4 z-30 text-white font-medium">
        <Link to="/" className="px-4 py-2 rounded-md bg-[#194737] hover:bg-[#29966a] transition">Home</Link>
        <Link to="/integrantes" className="px-4 py-2 rounded-md bg-[#194737] hover:bg-[#29966a] transition">Integrantes</Link>
        <Link to="/sobre" className="px-4 py-2 rounded-md bg-[#194737] hover:bg-[#29966a] transition">Sobre</Link>
        <Link to="/oficinas" className="px-4 py-2 rounded-md bg-[#194737] hover:bg-[#29966a] transition">Oficinas</Link>
        <Link to="/perguntas-frequentes" className="px-4 py-2 rounded-md bg-[#194737] hover:bg-[#29966a] transition">Perguntas</Link>
        <Link to="/contato" className="px-4 py-2 rounded-md bg-[#194737] hover:bg-[#29966a] transition">Contato</Link>
      </div>
    </div>
  );
}
