import type { TipoFaq } from "../types/tipoFaq";

export const ListaFaq: TipoFaq[] = [
  {
    id: 1,
    titulo: "Como faço para acessar a teleconsulta?",
    corpo: `Dentro do <a href="https://portaldopaciente.hc.fm.usp.br/teleconsulta">portal do Hospital das Clinicas</a> procure no menu à esquerda a opção "teleconsulta".`,
    autorDaPergunta: "Camila Ferreira",
    autorDaResposta: "Helena Costa",
    data_resposta: new Date(2025, 1, 10)
  },
  {
    id: 2,
    titulo: "Como imprimir meus resultados?",
    corpo: `Dentro do <a href="https://portaldopaciente.hc.fm.usp.br/resultados">portal do Hospital das Clinicas</a> procure no menu à esquerda a opção "Minhas receitas", em seguida, no canto superior esquerdo da tela, clique em “Imprimir”.`,
    autorDaPergunta: "João Vitor Almeida",
    autorDaResposta: "Rafael Lima",
    data_resposta: new Date(2025, 3, 23)
  },
  {
    id: 3,
    titulo: "Como consigo conferir minhas receitas?",
    corpo: `Dentro do <a href="https://portaldopaciente.hc.fm.usp.br/receitas">portal do Hospital das Clinicas</a> procure no menu à esquerda a opção "Minhas receitas".`,
    autorDaPergunta: "Renata Souza",
    autorDaResposta: "Helena Costa",
    data_resposta: new Date(2025, 6, 5)
  },
  {
    id: 4,
    titulo: "Template",
    corpo: `Template`,
    autorDaPergunta: "Marcos Tavares",
    autorDaResposta: "Beatriz Nogueira",
    data_resposta: new Date(2025, 6, 14)
  },
  {
    id: 5,
    titulo: "Template",
    corpo: `Template`,
    autorDaPergunta: "Letícia Ramos",
    autorDaResposta: "Beatriz Nogueira",
    data_resposta: new Date(2025, 8, 2)
  },
  {
    id: 6,
    titulo: "Template",
    corpo: `Template`,
    autorDaPergunta: "André Monteiro",
    autorDaResposta: "Eduardo Martins",
    data_resposta: new Date(2025, 9, 17)
  }
]
