import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type { LoginFormData } from "../../types/loginFormData";

export default function Login() {
  useEffect(() => {
    document.title = "Área de funcionários";
  }, []);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormData>({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
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
              placeholder="Insira seu nome de usuário"
              {...register("nomeUsuario", { required: "O nome de usuário é obrigatório!" })}
              className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 text-[#194737] focus:outline-none focus:ring-2 focus:ring-[#29966a]"
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
              type="email"
              placeholder="Insira seu email"
              {...register("email", {
                required: "Seu email é obrigatório.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Esse email não é válido!",
                },
              })}
              className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 text-[#194737] focus:outline-none focus:ring-2 focus:ring-[#29966a]"
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
        </form>
      </div>
    </main>
  );
}
