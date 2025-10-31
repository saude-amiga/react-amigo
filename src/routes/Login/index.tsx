import { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    document.title = "Área de funcionários";
  }, []);

  return (
    <main className="bg-[#ffffff] text-[#194737] min-h-200 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-[#76b99d] p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-[#194737]">Área de Funcionários</h1>
      </div>
    </main>
  );
}