import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { LoginFormData } from "../../types/loginFormData";

const API_URL = import.meta.env.VITE_API_URL;

export default function Login() {
  const navigate = useNavigate();
  const [exibeLoginNaoEncontrado, setExibeLoginNaoEncontrado] = useState<boolean>(false);

  useEffect(() => {
    document.title = "Login de funcionários";

    const usuarioLogado = localStorage.getItem("usuario");
    if (usuarioLogado) {
      navigate("/funcionarios");
    }
  }, [navigate]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormData>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      nomeUsuario: "",
      email: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const resp = await fetch(
        `${API_URL}/usuarios?nomeUsuario=${data.nomeUsuario}&email=${data.email}`
      );

      if (!resp.ok) throw new Error("Falha ao requisitar json de objeto usuário");

      const user = await resp.json();

      if (user.length !== 0) {
        setExibeLoginNaoEncontrado(false);
        localStorage.setItem("usuario", JSON.stringify(user[0]));
        alert("Usuário logado com sucesso!");
        navigate("/admin");
      } else {
        setExibeLoginNaoEncontrado(true);
      }
    } catch {
      alert("Erro no processo de login!");
    }
  };

  return (
    <main className="bg-[#ffffff] text-[#194737] min-h-200 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-[#76b99d] p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-[#194737]">Área de Funcionários</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="nomeUsuario" className="block text-sm font-medium mb-1 text-[#194737]">
              Nome de Usuário
            </label>
            <input
              type="text"
              id="nomeUsuario"
              placeholder="Digite o seu nome"
              maxLength={100}
              {...register("nomeUsuario", {
                required: "Nome é obrigatório.",
              })}
              className={`w-full px-4 py-2 rounded-md bg-white border ${
                errors.nomeUsuario ? "border-red-500" : "border-gray-300"
              } text-[#194737] focus:outline-none focus:ring-2 focus:ring-[#29966a]`}
            />
            {errors.nomeUsuario && (
              <p className="text-red-500 text-sm mt-1">{errors.nomeUsuario.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-[#194737]">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Digite o seu email"
              maxLength={60}
              {...register("email", {
                required: "Email é obrigatório.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email inválido.",
                },
              })}
              className={`w-full px-4 py-2 rounded-md bg-white border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } text-[#194737] focus:outline-none focus:ring-2 focus:ring-[#29966a]`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <button
            type="submit"
            id="botaoLogin"
            className="w-full bg-[#29966a] text-white py-2 rounded-md hover:bg-[#194737] transition-colors"
          >
            Fazer Login
          </button>

          {exibeLoginNaoEncontrado && (
            <p className="text-red-500 text-sm mt-4 text-center">
              Nome de usuário ou email incorreto
            </p>
          )}
        </form>
      </div>
    </main>
  );
}