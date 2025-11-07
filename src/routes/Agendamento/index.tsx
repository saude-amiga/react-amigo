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
    setError,
    clearErrors,
    formState: { errors, isValid },
  } = useForm<AgendamentoFormData>({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const [agendado, setAgendado] = useState(false);
  const [usuarios, setUsuarios] = useState<{ userId: number; name: string }[]>([]);
  const [loadingUsuarios, setLoadingUsuarios] = useState(true);

  useEffect(() => {
    async function fetchUsuarios() {
      try {
        const response = await fetch("https://api-saude-amiga.onrender.com/usuario", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "chave-primaria",
          },
        });
        if (!response.ok) {
          throw new Error("Erro na requisição de usuários!");
        }
        const data: { userId: number; name: string }[] = await response.json();
        setUsuarios(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      } finally {
        setLoadingUsuarios(false);
      }
    }
    fetchUsuarios();
  }, []);

  const verificarUsuario = (id: number) => {
    return usuarios.some((usuario) => usuario.userId === id);
  };

  const onSubmit = async (data: AgendamentoFormData) => {
    clearErrors("pacienteId");
    const usuarioExiste = verificarUsuario(data.pacienteId);
    if (!usuarioExiste) {
      setError("pacienteId", {
        type: "manual",
        message: "Usuário não encontrado. Verifique o ID informado.",
      });
      return;
    }
    try {
      const resp = await fetch("https://api-saude-amiga.onrender.com/agendamento", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "chave-primaria",
        },
        body: JSON.stringify({
          descricao: data.descricao,
          pacienteId: data.pacienteId,
          data: data.data,
        }),
      });
      if (!resp.ok) throw new Error("Erro ao realizar agendamento.");
      setAgendado(true);
      reset();
      setTimeout(() => setAgendado(false), 10000);
    } catch (error) {
      console.error("Erro no agendamento:", error);
      alert("Erro ao tentar realizar o agendamento!");
    }
  };

  return (
    <main className="bg-[#fffff] text-[#194737] min-h-screen flex items-center justify-center px-4 py-10 relative">
      <div className="w-full max-w-md bg-[#76b99d] p-8 rounded-lg shadow-md z-10">
        <h1 className="text-xl font-bold text-[#194737] mb-6 text-center">
          Agendamento
        </h1>
        {loadingUsuarios ? (
          <p className="text-center text-[#194737]">Carregando usuários...</p>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 bg-white p-6 rounded-lg shadow-inner"
          >
            <div>
              <label htmlFor="descricao" className="block text-sm font-medium mb-1 text-[#194737]">
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
                <p className="text-red-500 text-sm mt-1">{errors.descricao.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="pacienteId" className="block text-sm font-medium mb-1 text-[#194737]">
                ID do Usuário
              </label>
              <input
                type="number"
                id="pacienteId"
                placeholder="Digite o ID do Usuário"
                {...register("pacienteId", {
                  required: "O ID do usuário é obrigatório.",
                  valueAsNumber: true,
                })}
                className="w-full px-4 py-2 rounded-md border border-gray-300 text-[#194737] focus:outline-none focus:ring-2 focus:ring-[#29966a]"
              />
              {errors.pacienteId && (
                <p className="text-red-500 text-sm mt-1">{errors.pacienteId.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="data" className="block text-sm font-medium mb-1 text-[#194737]">
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
                  ? "bg-[#29966a] text-white hover:bg-[#194737] cursor-pointer"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
            >
              Agendar
            </button>
          </form>
        )}
      </div>
      {agendado && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white text-[#194737] p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-bold mb-4">Agendamento realizado com sucesso</h2>
            <button
              onClick={() => setAgendado(false)}
              className="bg-[#29966a] text-white px-4 py-2 rounded hover:bg-[#194737] transition-colors cursor-pointer"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </main>
  );
}