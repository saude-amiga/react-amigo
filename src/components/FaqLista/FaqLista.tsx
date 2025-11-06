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
          <p className="text-gray-500">Carregando perguntas frequentes...</p>
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
