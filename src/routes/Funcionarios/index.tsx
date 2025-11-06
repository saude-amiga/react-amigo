import { useEffect } from 'react';

export default function Funcionarios() {
  useEffect(() => {
    document.title = "Área de Funcionários";
  }, []);

  return (
    <main className="bg-white min-h-screen flex flex-col items-center justify-center p-6">
      <section className="max-w-md w-full bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-2xl font-bold text-center text-[#194737] mb-4">
          Área de Funcionários
        </h2>

        <button
          className="w-full bg-[#194737] text-white py-2 px-4 rounded hover:bg-[#76b99d] transition"
          onClick={() => console.log("Deslogar")}
        >
          Deslogar
        </button>

        <button
          className="w-full bg-[#194737] text-white py-2 px-4 rounded hover:bg-[#76b99d] transition"
          onClick={() => console.log("Responder Perguntas")}
        >
          Responder Perguntas
        </button>

        <button
          className="w-full bg-[#194737] text-white py-2 px-4 rounded hover:bg-[#76b99d] transition"
          onClick={() => console.log("Agendamento")}
        >
          Agendamento
        </button>
      </section>
    </main>
  );
}
