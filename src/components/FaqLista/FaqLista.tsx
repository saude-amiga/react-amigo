import { useEffect, useState } from "react";
import type { TipoFaq } from "../../types/tipoFaq";
import CardFaq from "../CardPergunta/CardPergunta";

export default function FaqLista() {
  const [perguntas, setPerguntas] = useState<TipoFaq[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://api-saude-amiga.onrender.com/pergunta", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "chave-primaria",
          },
        });

        if (!response.ok) {
          throw new Error("Erro na requisição da api do Java!");
        }

        const data: TipoFaq[] = await response.json();
        const perguntasComResposta = data.filter((faq) => faq.corpo);
        setPerguntas(perguntasComResposta);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <section className="w-full max-w-screen px-4 py-6 text-[#194737] text-center overflow-hidden">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6">
        Perguntas Frequentes
      </h2>

      <div className="flex flex-col items-center gap-4 w-full">
        {loading ? (
          <section className="bg-[#ffffff] p-6 max-w-xl mx-auto mt-8 rounded-lg shadow-md text-center text-[#194737]">
            <h2 className="text-2xl font-bold mb-4 text-[#194737]">
              Carregando ...
            </h2>
          </section>
        ) : perguntas.length === 0 ? (
          <section className="bg-[#ffffff] p-6 max-w-xl mx-auto mt-8 rounded-lg shadow-md text-center text-[#194737]">
            <h2 className="text-2xl font-bold mb-4 text-[#194737]">
              Nenhuma pergunta encontrada
            </h2>
            <p className="mb-6">
              No momento não há perguntas frequentes disponíveis.
            </p>
          </section>
        ) : (
          perguntas.map((faq) => (
            <div key={faq.id} className="w-full max-w-[95vw] sm:max-w-md">
              <CardFaq faq={faq} />
            </div>
          ))
        )}
      </div>
    </section>
  );
}
