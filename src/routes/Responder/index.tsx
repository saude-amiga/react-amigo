import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type { TipoFaq } from "../../types/tipoFaq";

export default function Responder() {
    const [perguntas, setPerguntas] = useState<TipoFaq[]>([]);
    const [selecionada, setSelecionada] = useState<TipoFaq | null>(null);
    const [carregando, setCarregando] = useState(true);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm<{ corpo: string; autorDaResposta: number }>({
        mode: "onChange",
        defaultValues: {
            corpo: "",
            autorDaResposta: 0,
        },
    });

    useEffect(() => {
        document.title = "Responder Perguntas";

        const buscarPerguntas = async () => {
            try {
                const resp = await fetch("https://api-saude-amiga.onrender.com/pergunta", {
                    headers: {
                        "Content-Type": "application/json",
                        "x-api-key": "chave-primaria",
                    },
                });

                const todas: TipoFaq[] = await resp.json();
                const semResposta = todas.filter((p) => !p.corpo || p.corpo.trim() === "");
                setPerguntas(semResposta);
            } catch (error) {
                console.error("Erro ao buscar perguntas:", error);
            } finally {
                setCarregando(false);
            }
        };

        buscarPerguntas();
    }, []);

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
            setSelecionada(null);
        }
    }, [isSubmitSuccessful, reset]);

    const onSubmit = async ({ corpo, autorDaResposta }: { corpo: string; autorDaResposta: number }) => {
        if (!selecionada) return;

        const dataAtual = new Date().toISOString();

        try {
            const resp = await fetch(
                `https://api-saude-amiga.onrender.com/pergunta/${selecionada.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "x-api-key": "chave-primaria",
                    },
                    body: JSON.stringify({
                        corpo,
                        autorDaResposta,
                        data: dataAtual,
                    }),
                }
            );

            if (!resp.ok) {
                const erro = await resp.text();
                throw new Error(`Erro da API: ${erro}`);
            }

            alert("Resposta enviada com sucesso!");
            setPerguntas((prev) => prev.filter((p) => p.id !== selecionada.id));
        } catch (error) {
            console.error("Erro ao responder pergunta:", error);
            alert("Erro ao enviar resposta. Verifique os campos e tente novamente.");
        }
    };

    return (
        <main className="bg-white min-h-screen flex items-center justify-center p-6">
            <section className="max-w-full sm:max-w-2xl mx-auto p-6 sm:p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-[#194737] mb-6">
                    Perguntas sem Resposta
                </h2>

                {carregando ? (
                    <p className="text-center text-gray-600">Carregando perguntas...</p>
                ) : perguntas.length === 0 ? (
                    <p className="text-center text-gray-600">Nenhuma pergunta pendente.</p>
                ) : (
                    <div className="flex flex-col items-center space-y-4 mb-8">
                        {perguntas.map((p) => (
                            <button
                                key={p.id}
                                onClick={() => setSelecionada(p)}
                                className="cursor-pointer w-full max-w-[95vw] text-center bg-[#76b99d] text-[#194737] font-semibold px-4 py-3 rounded hover:bg-white transition shadow-sm"
                            >
                                {p.titulo}
                            </button>
                        ))}
                    </div>

                )}

                {selecionada && (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="bg-gray-100 p-4 rounded">
                            <p className="text-sm text-gray-700"><strong>Respondendo a:</strong></p>
                            <p className="text-md font-semibold text-[#194737]">{selecionada.titulo}</p>
                            <p className="text-sm text-gray-600 mt-1"><strong>Autor:</strong> {selecionada.autorDaPergunta}</p>
                        </div>

                        <div>
                            <label htmlFor="autorDaResposta" className="block text-sm font-medium text-gray-700">
                                ID do Funcionário:
                            </label>
                            <input
                                type="number"
                                id="autorDaResposta"
                                placeholder="Digite seu ID de funcionário"
                                {...register("autorDaResposta", {
                                    required: "ID é obrigatório.",
                                    min: { value: 1, message: "ID inválido." },
                                })}
                                className={`mt-1 block w-full border rounded px-3 py-2 focus:outline-none focus:ring ${errors.autorDaResposta ? "border-red-500" : "border-gray-300"
                                    }`}
                            />
                            {errors.autorDaResposta && (
                                <p className="text-red-500 text-sm mt-1">{errors.autorDaResposta.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="corpo" className="block text-sm font-medium text-gray-700">
                                Resposta:
                            </label>
                            <textarea
                                id="corpo"
                                rows={5}
                                placeholder="Digite sua resposta aqui..."
                                {...register("corpo", { required: "Resposta é obrigatória." })}
                                className={`mt-1 block w-full border rounded px-3 py-2 focus:outline-none focus:ring ${errors.corpo ? "border-red-500" : "border-gray-300"
                                    }`}
                            />
                            {errors.corpo && (
                                <p className="text-red-500 text-sm mt-1">{errors.corpo.message}</p>
                            )}
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="cursor-pointer w-full bg-[#194737] text-white py-2 px-4 rounded hover:bg-[#76b99d] transition"
                            >
                                Enviar Resposta
                            </button>
                        </div>
                    </form>
                )}
            </section>
        </main>
    );
}
