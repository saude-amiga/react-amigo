import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Funcionarios() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Área de Funcionários";
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <main className="bg-white min-h-screen flex items-center justify-center p-6">
      <section className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4 text-center">
        <h2 className="text-2xl font-bold text-[#194737] mb-4">
          Área de Funcionários
        </h2>

        <Link
          to="/responder"
          className="block w-full bg-[#194737] text-white py-2 px-4 rounded hover:bg-[#76b99d] transition"
        >
          Responder perguntas
        </Link>

        <Link
          to="/agendamento"
          className="block w-full bg-[#194737] text-white py-2 px-4 rounded hover:bg-[#76b99d] transition"
        >
          Agendamento
        </Link>

        <button
          className="cursor-pointer w-full bg-[#CC2004] text-white py-2 px-4 mt-6 rounded hover:bg-[#941600] transition"
          onClick={handleLogout}
        >
          Deslogar
        </button>

      </section>
    </main>
  );
}
