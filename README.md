# 🩺 Saúde Amiga 🏥

Seja bem-vindo(a) ao repositório do nosso projeto.
Nossa solução foi desenvolvida durante o Challenge do Hospital das Clínicas de 2025.

## 🎯 Objetivo do Projeto

A Saúde Amiga tem como missão tornar o uso do aplicativo Portal do Paciente HC mais simples, acessível e acolhedor para idosos, pessoas com deficiência (PCDs) e para quem não está familiarizado com tecnologia. Nossa solução foi pensada para reduzir o absenteísmo, facilitar a comunicação e eliminar barreiras que dificultam o acesso desses pacientes aos serviços digitais de saúde. Mais do que melhorar o atendimento, buscamos promover a inclusão digital, garantindo que todos possam cuidar da sua saúde com mais conforto, autonomia e dignidade.
Este é um site institucional criado para divulgar nossa solução. Além de apresentar os objetivos e funcionalidades da solução, o site também serve como um canal para responder perguntas frequentes sobre nosso aplicativo e o Portal do Paciente do HC. Os pacientes podem cadastrar novas dúvidas que serão respondidas futuramente para tentarmos garantir uma comunicação efetiva. Também incluímos o sistema para os funcionários responderem as perguntas e agendarem consultas/exames para os pacientes.

## 📁 Estrutura de Diretórios e Arquivos

```
react-amigo
│
│   .gitignore
│   eslint.config.js
│   index.html
│   package-lock.json
│   package.json
│   README.md
│   tsconfig.app.json
│   tsconfig.json
│   tsconfig.node.json
│   vercel.json
│   vite.config.ts
│
├───public
│   └───img
│           logo-icone.png
│
└───src
    │   App.tsx
    │   global.css
    │   main.tsx
    │   vite-env.d.ts
    │
    ├───components
    │   ├───AcessoRapido
    │   │       AcessoRapido.tsx
    │   │
    │   ├───Banner
    │   │       Banner.tsx
    │   │
    │   ├───Cabecalho
    │   │       Cabecalho.tsx
    │   │
    │   ├───CardPergunta
    │   │       CardPergunta.tsx
    │   │
    │   ├───FaqLista
    │   │       FaqLista.tsx
    │   │
    │   ├───Menu
    │   │       Menu.tsx
    │   │
    │   └───Rodape
    │           Rodape.tsx
    │
    ├───img
    │   │   desenho-saude-amiga.png
    │   │   hdc.png
    │   │   logo-saude-amiga.png
    │   │   oficina1.jpg
    │   │   oficina2.jpg
    │   │   oficina3.jpg
    │   │   rafael-kubagawa-ramos.jpg
    │   │   tela1.png
    │   │   tela2.png
    │   │   victor-sabelli.jpg
    │   │   vinicius-soteras-braga.jpg
    │   │
    │   ├───banner
    │   │       banner1.jpg
    │   │       banner2.jpg
    │   │       banner3.jpg
    │   │
    │   └───icones
    │           facebook.png
    │           github.png
    │           instagram.png
    │           linkedin-og.png
    │           linkedin.png
    │           login.png
    │           mail-branco.png
    │           mail.png
    │           menu.png
    │           phone-branco.png
    │           phone.png
    │           render.png
    │           telegram.png
    │           tiktok.png
    │           whats-branco.png
    │           whats.png
    │           x-twitter.png
    │
    ├───routes
    │   ├───Agendamento
    │   │       index.tsx
    │   │
    │   ├───Contato
    │   │       index.tsx
    │   │
    │   ├───Error
    │   │       index.tsx
    │   │
    │   ├───Faq
    │   │       index.tsx
    │   │
    │   ├───FaqResposta
    │   │       index.tsx
    │   │
    │   ├───Funcionarios
    │   │       index.tsx
    │   │
    │   ├───Home
    │   │       index.tsx
    │   │
    │   ├───Integrantes
    │   │       index.tsx
    │   │
    │   ├───Login
    │   │       index.tsx
    │   │
    │   ├───Oficinas
    │   │       index.tsx
    │   │
    │   ├───Responder
    │   │       index.tsx
    │   │
    │   └───Sobre
    │           index.tsx
    │
    └───types
            agendamentoFormData.ts
            cardFaq.ts
            formData.ts
            loginFormData.ts
            tipoFaq.ts
```

## 🛠️ Tecnologias Utilizadas

- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="30" alt="HTML5"/> **HTML5**
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="30" alt="CSS3"/> **CSS3**
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="30" alt="JavaScript"/> **JavaScript**
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="30" alt="Git"/> **Git**
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="30" alt="GitHub"/> **GitHub**
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="30" alt="React"/> **React**
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" width="30" alt="Vite"/> **Vite**
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="30" alt="TypeScript"/> **TypeScript**
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" width="30" alt="Tailwind CSS"/> **Tailwind CSS**
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" width="30" alt="Java"/> **Java**
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" width="30" alt="Vercel"/> **Vercel**
- <img src="./src/img/icones/render.png" width="30" alt="Render"/> **Render**
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" width="30" alt="Postman"/> **Postman**

## 🔗 API

🌐 Endpoint da API

https://api-saude-amiga.onrender.com/

📬 Coleção no Postman

https://www.postman.com/aviation-astronaut-85642828/sprint-4-java-saude-amiga/collection/f8xfw1q/sprint-4-java


💻 Repositório da API

https://github.com/saude-amiga/java-amigo-2

<a href="https://github.com/saude-amiga/java-amigo-2" target="_blank">
  <img src="https://img.shields.io/badge/GitHub-java--amigo-c6efce?style=flat&logo=github" width="20%"/>
</a>

## 👨‍💻 Integrantes

| Nome                | RM       | Turma   | GitHub                                       | LinkedIn                                     |
|---------------------|----------|---------|----------------------------------------------|----------------------------------------------|
| Rafael Kubagawa Ramos      | RM565572 | 1TDSPO   | [@Rafaelkubagawa](https://github.com/Rafaelkubagawa) | [Rafael Kubagawa](https://www.linkedin.com/in/rafael-kubagawa-ramos-243896330)     |
| Victor Sabelli Rocha Batista         | RM566224 | 1TDSPO   | [@Sabelli](https://github.com/Sabelli)   | [Victor Sabelli](https://www.linkedin.com/in/victorsabelli/)    |
| Vinicius Soteras Braga       | RM566230 | 1TDSPO   | [@BragaSoterasVinicius](https://github.com/BragaSoterasVinicius) | [Vinicius Soteras](https://www.linkedin.com/in/vinicius-soteras-braga-60335516a/) |

## 📷 Fotos

Rafael Kubagawa Ramos
<img src="/src/img/rafael-kubagawa-ramos.jpg" alt="Foto do integrante Rafael Kubagawa Ramos - Jovem branco com cabelo preto e olhos castanhos" width="60"/>

Victor Sabelli Rocha Batista
<img src="/src/img/victor-sabelli.jpg" alt="Foto do integrante Victor Sabelli Rocha Batista - Jovem branco com cabelo e olhos castanhos" width="60"/>

Vinicius Soteras Braga
<img src="/src/img/vinicius-soteras-braga.jpg" alt="Foto do integrante Vinicius Soteras Braga - Jovem branco com cabelo e olhos castanhos" width="60"/>

## 🔗 Repositório

**Conheça o nosso repositório:**

https://github.com/saude-amiga/react-amigo

<a href="https://github.com/saude-amiga/react-amigo" target="_blank">
  <img src="https://img.shields.io/badge/GitHub-saude--amiga-c6efce?style=flat&logo=github" width=20%/>
</a>

## 🔗 Apresentação

**Veja mais sobre os recursos do projeto no nosso vídeo!**

https://youtu.be/7gMNUPPSKCc

<a href="https://youtu.be/7gMNUPPSKCc" target="_blank">
  <img src="https://img.shields.io/badge/YouTube-Apresentação%20Saúde%20Amiga-ff0000?style=flat&logo=youtube&logoColor=white" width="20%"/>
</a>

## 🚀 Deploy

**O projeto está disponível online!**

🔗 [react-amigo.vercel.app](https://react-amigo.vercel.app/)