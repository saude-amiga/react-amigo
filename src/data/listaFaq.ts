import type { TipoFaq } from "../types/tipoFaq";

export const ListaFaq: TipoFaq[] = [
    {
        id: 1,
        pergunta: "Como faço para acessar a teleconsulta?",
        resposta: `Dentro do <a href="https://portaldopaciente.hc.fm.usp.br/teleconsulta">portal do Hospital das Clinicas</a> procure no menu à esquerda a opção "teleconsulta".`,
        categoria: "Aplicativo HC",
        data_resposta: new Date(2025, 1, 10)
    },
    {
        id: 2,
        pergunta: "Como imprimir meus resultados?",
        resposta: `Dentro do <a href="https://portaldopaciente.hc.fm.usp.br/resultados">portal do Hospital das Clinicas</a> procure no menu à esquerda a opção "Minhas receitas", em seguida, no canto superior esquerdo da tela, clique em “Imprimir”.`,
        categoria: "Aplicativo HC",
        data_resposta: new Date(2025, 3, 23)
    },
    {
        id: 3,
        pergunta: "Como consigo conferir minhas receitas?",
        resposta: `Dentro do <a href="https://portaldopaciente.hc.fm.usp.br/receitas">portal do Hospital das Clinicas</a> procure no menu à esquerda a opção "Minhas receitas".`,
        categoria: "Aplicativo HC",
        data_resposta: new Date(2025, 6, 5)
    },
    {
        id: 4,
        pergunta: "Template",
        resposta: `Template`,
        categoria: "Template",
        data_resposta: new Date(2025, 6, 14)
    },
        {
        id: 5,
        pergunta: "Template",
        resposta: `Template`,
        categoria: "Template",
        data_resposta: new Date(2025, 8, 2)
    },
        {
        id: 6,
        pergunta: "Template",
        resposta: `Template`,
        categoria: "Template",
        data_resposta: new Date(2025, 9, 17)
    },
]