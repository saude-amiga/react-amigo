import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { LoginFormData, Usuario } from "../../types/loginFormData";

export default function Login() {
  const navigate = useNavigate();
  const [exibeLoginNaoEncontrado, setExibeLoginNaoEncontrado] = useState<boolean>(false);

  useEffect(() => {
    document.title = "Login de funcionários";

    const token = localStorage.getItem("authToken");
    if (token) {
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
      email: "",
      senha: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const resp = await fetch("https://api-saude-amiga.onrender.com/usuario/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "chave-primaria",
        },
        body: JSON.stringify({
          email: data.email,
          senha: data.senha,
        }),
      });

      if (!resp.ok) throw new Error("Erro ao autenticar usuário.");

      const usuario: Usuario = await resp.json();

      if (usuario.funcionario) {
        localStorage.setItem("authToken", usuario.token);
        setExibeLoginNaoEncontrado(false);
        navigate("/funcionarios");
      } else {
        setExibeLoginNaoEncontrado(true);
      }
    } catch (error) {
      console.error("Erro no login:", error);
      alert("Erro no processo de login!");
    }
  };

  return (
    <main className="bg-[#ffffff] text-[#194737] min-h-200 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-[#76b99d] p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-[#194737]">Área de Funcionários</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
              className={`w-full px-4 py-2 rounded-md bg-white border ${errors.email ? "border-red-500" : "border-gray-300"
                } text-[#194737] focus:outline-none focus:ring-2 focus:ring-[#29966a]`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="senha" className="block text-sm font-medium mb-1 text-[#194737]">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              placeholder="Digite sua senha"
              maxLength={100}
              {...register("senha", {
                required: "Senha é obrigatória.",
              })}
              className={`w-full px-4 py-2 rounded-md bg-white border ${errors.senha ? "border-red-500" : "border-gray-300"
                } text-[#194737] focus:outline-none focus:ring-2 focus:ring-[#29966a]`}
            />
            {errors.senha && (
              <p className="text-red-500 text-sm mt-1">{errors.senha.message}</p>
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
              Email ou senha incorretos ou não autorizado
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
