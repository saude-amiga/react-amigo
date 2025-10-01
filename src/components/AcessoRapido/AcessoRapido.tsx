import { Link } from "react-router-dom";

export default function AcessoRapido() {
  return (
    <nav className="grid grid-cols-2 gap-4 text-lg text-gray-200 place-items-center">
      <Link to="/" className="hover:underline text-center">Home</Link>
      <Link to="/quem-somos" className="hover:underline text-center">Integrantes</Link>
      <Link to="/saude-amiga" className="hover:underline text-center">Sobre</Link>
      <Link to="/oficinas" className="hover:underline text-center">Oficinas</Link>
      <Link to="/perguntas-frequentes" className="hover:underline text-center">Perguntas</Link>
      <Link to="/contato" className="hover:underline text-center">Contato</Link>
    </nav>
  );
}
