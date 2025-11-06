import { useEffect } from "react";
import FaqLista from "../../components/FaqLista/FaqLista";
import { useForm } from "react-hook-form";
import type { FormData } from "../../types/formData";

export default function FormPergunta() {
  useEffect(() => {
    document.title = "Perguntas";
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      autorDaPergunta: "",
      celular: "",
      email: "",
      assunto: "Aplicativo HC",
      titulo: "",
    },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("https://api-saude-amiga.onrender.com/pergunta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "chave-primaria",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar a pergunta para a API.");
      }

      alert("Pergunta enviada com sucesso!");
      console.log("Dados enviados:", data);
    } catch (error) {
      console.error("Erro no envio:", error);
      alert("Ocorreu um erro ao enviar sua pergunta. Tente novamente mais tarde.");
    }
  };

  return (
    <main className="bg-white">
      <section className="mb-10">
        <FaqLista />
      </section>

      <section className="max-w-full sm:max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-[#194737] mb-6">
          Envie-nos sua pergunta
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="idAutor" className="block text-sm font-medium text-gray-700">
              Nome:
            </label>
            <input
              type="text"
              id="idAutor"
              placeholder="Digite o seu nome"
              maxLength={100}
              {...register("autorDaPergunta", { required: "Nome é obrigatório." })}
              className={`mt-1 block w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
                errors.autorDaPergunta ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.autorDaPergunta && (
              <p className="text-red-500 text-sm mt-1">{errors.autorDaPergunta.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="idCelular" className="block text-sm font-medium text-gray-700">
              Número do Celular:
            </label>
            <input
              type="tel"
              id="idCelular"
              placeholder="Digite o número do celular"
              maxLength={11}
              {...register("celular", {
                required: "Celular é obrigatório.",
                pattern: {
                  value: /^\d{10,11}$/,
                  message: "Celular deve ter 10 ou 11 dígitos.",
                },
              })}
              className={`mt-1 block w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
                errors.celular ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.celular && <p className="text-red-500 text-sm mt-1">{errors.celular.message}</p>}
          </div>

          <div>
            <label htmlFor="idEmail" className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="text"
              id="idEmail"
              placeholder="Digite o seu email"
              maxLength={60}
              {...register("email", {
                required: "Email é obrigatório.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email inválido.",
                },
              })}
              className={`mt-1 block w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="idAssunto" className="block text-sm font-medium text-gray-700">
              Assunto:
            </label>
            <select
              id="idAssunto"
              {...register("assunto")}
              className="cursor-pointer mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="aplicativoHC">Aplicativo HC</option>
              <option value="aplicativoSA">Aplicativo Saúde Amiga</option>
              <option value="chatBot">ChatBot</option>
              <option value="site">Site</option>
              <option value="oficinas">Oficinas</option>
              <option value="outros">Outros</option>
            </select>
          </div>

          <div>
            <label htmlFor="idTitulo" className="block text-sm font-medium text-gray-700">
              Pergunta:
            </label>
            <input
              type="text"
              id="idTitulo"
              placeholder="Digite sua pergunta"
              maxLength={1000}
              {...register("titulo", {
                required: "Pergunta é obrigatória.",
              })}
              className={`mt-1 block w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
                errors.titulo ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.titulo && <p className="text-red-500 text-sm mt-1">{errors.titulo.message}</p>}
          </div>

          <div>
            <button
              type="submit"
              id="botaoEnviar"
              className="cursor-pointer w-full bg-[#194737] text-white py-2 px-4 rounded hover:bg-[#76b99d] transition"
            >
              Enviar Pergunta
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}