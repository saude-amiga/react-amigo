import { Link } from "react-router-dom";

export default function AcessoRapido() {
  return (
    <nav className="grid grid-cols-2 gap-4 text-lg text-gray-200 place-items-center">
      <Link to="/" className="hover:underline text-center">Home</Link>
      <Link to="/quem-somos" className="hover:underline text-center">Quem Somos</Link>
      <Link to="/saude-amiga" className="hover:underline text-center">Saúde Amiga</Link>
      <Link to="/oficinas" className="hover:underline text-center">Oficinas</Link>
      <Link to="/perguntas-frequentes" className="hover:underline text-center">FAQ</Link>
      <Link to="/contato" className="hover:underline text-center">Contato</Link>
    </nav>
  );
}
