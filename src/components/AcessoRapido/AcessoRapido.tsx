import { Link } from "react-router-dom";

export default function AcessoRapido() {
  return (
    <nav className="flex flex-col md:flex-row md:justify-center items-start md:items-center gap-2 md:gap-6 text-sm text-gray-200">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/quem-somos" className="hover:underline">Quem Somos</Link>
      <Link to="/saude-amiga" className="hover:underline">Saúde Amiga</Link>
      <Link to="/oficinas" className="hover:underline">Oficinas</Link>
      <Link to="/perguntas-frequentes" className="hover:underline">FAQ</Link>
      <Link to="/contato" className="hover:underline">Contato</Link>
    </nav>
  );
}
