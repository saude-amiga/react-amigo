import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type { AgendamentoFormData } from "../../types/agendamentoFormData";

export default function Agendamento() {
  useEffect(() => {
    document.title = "Agendamento";
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<AgendamentoFormData>({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const [agendado, setAgendado] = useState(false);

  const onSubmit = (data: AgendamentoFormData) => {
    console.log("Agendamento enviado:", data);
    setAgendado(true);
    setTimeout(() => setAgendado(false), 4000);
    reset();
  };

  return (
    <main className="bg-[#fffff] text-[#194737] min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-[#76b99d] p-8 rounded-lg shadow-md">
        <h1 className="text-xl font-bold text-[#194737] mb-6 text-center">
          Agendamento
        </h1>

        {agendado && (
          <div className="bg-white border-green-500 font-bold text-[#194737] p-3 rounded mb-6 text-center">
            Seu agendamento foi realizado com sucesso!
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 bg-white p-6 rounded-lg shadow-inner"
        >
          <div>
            <label
              htmlFor="descricao"
              className="block text-sm font-medium mb-1 text-[#194737]"
            >
              Descrição
            </label>
            <input
              type="text"
              id="descricao"
              placeholder="Digite a Consulta/Exame"
              {...register("descricao", {
                required: "A descrição é obrigatória.",
              })}
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-[#194737] focus:outline-none focus:ring-2 focus:ring-[#29966a]"
            />
            {errors.descricao && (
              <p className="text-red-500 text-sm mt-1">
                {errors.descricao.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="pacienteId"
              className="block text-sm font-medium mb-1 text-[#194737]"
            >
              ID do Paciente
            </label>
            <input
              type="number"
              id="pacienteId"
              placeholder="Digite o ID do Paciente"
              {...register("pacienteId", {
                required: "O ID do paciente é obrigatório.",
                valueAsNumber: true,
              })}
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-[#194737] focus:outline-none focus:ring-2 focus:ring-[#29966a]"
            />
            {errors.pacienteId && (
              <p className="text-red-500 text-sm mt-1">
                {errors.pacienteId.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="data"
              className="block text-sm font-medium mb-1 text-[#194737]"
            >
              Data
            </label>
            <input
              type="date"
              id="data"
              {...register("data", {
                required: "A data é obrigatória.",
                validate: (value) => {
                  const hoje = new Date();
                  const selecionada = new Date(value);
                  hoje.setHours(0, 0, 0, 0);
                  return selecionada > hoje || "Escolha uma data futura";
                },
              })}
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-[#194737] focus:outline-none focus:ring-2 focus:ring-[#29966a]"
            />
            {errors.data && (
              <p className="text-red-500 text-sm mt-1">{errors.data.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className={`w-full py-2 rounded-md font-semibold transition-colors ${
              isValid
                ? "bg-[#29966a] text-white hover:bg-[#194737]"
                : "bg-gray-400 text-gray-200 cursor-not-allowed"
            }`}
          >
            Agendar
          </button>
        </form>
      </div>
    </main>
  );
}