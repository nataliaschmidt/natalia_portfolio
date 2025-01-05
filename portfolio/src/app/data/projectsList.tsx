export type ProjectsType = {
  id: number;
  title: string;
  image: string;
  video: string;
  description: string;
  technologies: string[];
  github: string;
  isVIdeo: boolean;
};

const projectsList: ProjectsType[] = [
  {
    id: 1,
    title: "Trybe Wallet",
    image: "/imagens_projetos/trybewallet.svg",
    video: "/videos_projetos/trybewallet.mp4",
    description:
      "Um aplicativo de gestão financeira com funcionalidades de controle de despesas e conversão de moedas. Os usuários têm a flexibilidade de adicionar, remover e editar seus gastos, por fim podem visualizar uma tabela de suas transações.",
    technologies: ["CSS", "HTML", "JavaScript", "React", "Redux", "RTL"],
    github: "https://github.com/nataliaschmidt/project-trybewallet",
    isVIdeo: true,
  },
  {
    id: 2,
    title: "Trivia",
    image: "/imagens_projetos/trivia.svg",
    video: "/videos_projetos/trivia.mp4",
    description:
      "Um jogo de perguntas e respostas inspirado no clássico Trivia. Após o login, o jogador é direcionado para a página do jogo, onde têm 30 segundos para responder cada pergunta. Ao término, ocorre o direcionamento para a página de placar, revelando seu desempenho. A página de login oferece a personalização das configurações de jogo, permitindo a escolha de categorias, níveis de dificuldade e tipos de perguntas.",
    technologies: ["CSS", "HTML", "JavaScript", "React", "Redux", "RTL"],
    github: "https://github.com/nataliaschmidt/project-trivia",
    isVIdeo: true,
  },
  {
    id: 3,
    title: "Star Wars Planets Search",
    image: "/imagens_projetos/react.svg",
    video: "",
    description:
      "Um catálogo de planetas no universo de Star Wars, oferecendo a capacidade de aplicar filtros personalizados com base em características específicas dos planetas como o clima, a população, o nome, o diâmetro... ",
    technologies: ["Context API", "JavaScript", "React", "RTL"],
    github: "https://github.com/nataliaschmidt/project-starwars-planets-search",
    isVIdeo: false,
  },
  {
    id: 4,
    title: "Tryunfo",
    image: "/imagens_projetos/tryunfo.svg",
    video: "/videos_projetos/tryunfo.mp4",
    description:
      "Neste projeto, o usuário pode personalizar suas próprias cartas no estilo do jogo Super Trunfo. Tenha a liberdade de criar um baralho com o tema de sua escolha, adicionando e removendo cartas conforme sua preferência. ",
    technologies: ["CSS", "HTML", "JavaScript", "React"],
    github: "https://github.com/nataliaschmidt/project-tryunfo",
    isVIdeo: true,
  },
  {
    id: 5,
    title: "TrybeTunes",
    image: "/imagens_projetos/trybetunes.svg",
    video: "/videos_projetos/trybetunes.mp4",
    description:
      "Nesta aplicação o usuário pode facilmente pesquisar por uma banda ou artista, explorar os álbuns disponíveis, visualizar a lista de músicas de um álbum selecionado e até mesmo ouvir uma prévia da música escolhida. Além disso, possui funcionalidade de criar uma lista de músicas favoritas, permitindo que os usuários organizem e acessem facilmente suas preferências musicais.",
    technologies: ["CSS", "HTML", "JavaScript", "React"],
    github: "https://github.com/nataliaschmidt/project-trybetunes",
    isVIdeo: true,
  },
  {
    id: 6,
    title: "Solar System",
    image: "/imagens_projetos/solar_system.svg",
    video: "/videos_projetos/solar_system.mp4",
    description:
      "Nesta aplicação, o usuário têm a oportunidade de visualizar uma lista dos planetas que compõem o Sistema Solar. Além disso, há uma seção dedicada a informações sobre missões espaciais.",
    technologies: ["CSS", "HTML", "JavaScript", "React"],
    github: "https://github.com/nataliaschmidt/project-solar-system",
    isVIdeo: true,
  },
  {
    id: 7,
    title: "Aplicativo de Receitas",
    image: "/imagens_projetos/recipes_app.svg",
    video: "/videos_projetos/app_recipes.mp4",
    description:
      "Neste aplicativo, os usuários podem explorar uma variedade de receitas para bebidas e comidas. A funcionalidade de iniciar uma receita orienta os usuários para a execução da receita. A opção de favoritos permite criar uma coleção personalizada das receitas preferidas, tornando fácil acessá-las posteriormente. Ainda há a opção de busca, seja pelo nome da receita ou por um ingrediente específico, facilitando a pesquisa de uma receita.",
    technologies: ["CSS", "Context API", "HTML", "JavaScript", "React", "RTL"],
    github: "https://github.com/nataliaschmidt/project-recipes-app",
    isVIdeo: true,
  },
  {
    id: 8,
    title: "Online Store",
    image: "/imagens_projetos/online_store.svg",
    video: "/videos_projetos/online_store.mp4",
    description:
      "Este projeto oferece uma versão simplificada de uma loja online, o usuário pode buscar por produtos através de termos e categorias, adicionar ou remover produtos do carrinho de compras, e visualizar avaliações dos produtos assim como deixar sua avaliação. Por fim, é possível simular a finalização da compra dos itens selecionados no carrinho",
    technologies: ["CSS", "HTML", "JavaScript", "React"],
    github: "https://github.com/nataliaschmidt/project-frontend-online-store",
    isVIdeo: true,
  },
  {
    id: 9,
    title: "Trybe Futebol Club",
    image: "/imagens_projetos/tfc.svg",
    video: "/videos_projetos/tfc.mp4",
    description:
      "O TFC é um site informativo sobre partidas e classificações de futebol. Ao efetuar o login como administrador, você tem a possibilidade de criar e gerenciar partidas de futebol. Isso inclui a atualização do placar em tempo real e o ajuste do status de andamento do jogo.",
    technologies: [
      "Chai",
      "Docker",
      "TypeScript",
      "Express",
      "Mocha",
      "MySQL",
      "Sinon",
    ],
    github: "https://github.com/nataliaschmidt/project-TFC",
    isVIdeo: true,
  },
  {
    id: 10,
    title: "Blogs Api",
    image: "/imagens_projetos/js.svg",
    video: "",
    description:
      "Este projeto consiste no desenvolvimento de uma API RESTful para gerenciar um sistema de blogs, incluindo a criação, leitura, atualização e exclusão (CRUD) de posts. O objetivo principal é fornecer funcionalidades para gerenciamento de usuários, categorias e posts de blog, além de autenticação e autorização via JWT (JSON Web Token).",
    technologies: [
      "Docker",
      "JavaScript",
      "JWT",
      "Express",
      "Node",
      "MySQL",
      "Sequelize",
    ],
    github: "https://github.com/nataliaschmidt/project-blogs-api",
    isVIdeo: false,
  },
  {
    id: 11,
    title: "Store Manager",
    image: "/imagens_projetos/js.svg",
    video: "",
    description:
      "Este projeto consiste no desenvolvimento de uma API RESTful para gerenciar um sistema de vendas. A aplicação permite realizar operações de CRUD (criação, leitura, atualização e exclusão) para produtos e vendas, utilizando a arquitetura em camadas.",
    technologies: [
      "Chai",
      "Docker",
      "JavaScript",
      "Express",
      "Node",
      "Mocha",
      "MySQL",
      "Sinon",
    ],
    github: "https://github.com/nataliaschmidt/project-store-manager",
    isVIdeo: false,
  },
  {
    id: 12,
    title: "Agrix",
    image: "/imagens_projetos/java.svg",
    video: "",
    description:
      "O projeto Agrix foi desenvolvido com o objetivo de criar um sistema de gestão e monitoramento de fazendas, utilizando o ecossistema Spring. Para o projeto foi criada uma API para gerenciar fazendas e plantações.",
    technologies: ["Docker", "Java", "Maven", "Spring"],
    github: "https://github.com/nataliaschmidt/project-java-agrix",
    isVIdeo: false,
  },
  {
    id: 13,
    title: "Trybers and Dragons",
    image: "/imagens_projetos/ts.svg",
    video: "",
    description:
      "Este projeto consiste na criação de uma estrutura de código baseada nos princípios de Programação Orientada a Objetos (POO) e na arquitetura SOLID, com o objetivo de modelar um universo inspirado em jogos de RPG. A implementação inclui classes, interfaces e métodos que simulam personagens, raças, arquétipos e batalhas.",
    technologies: ["Docker", "Node", "TypeScript"],
    github: "https://github.com/nataliaschmidt/project-trybers-and-dragons.",
    isVIdeo: false,
  },
  {
    id: 14,
    title: "Trybesmith",
    image: "/imagens_projetos/ts.svg",
    video: "",
    description:
      "O projeto Trybesmith consiste no desenvolvimento de uma loja de itens medievais, implementada no formato de uma API. O objetivo principal é criar endpoints que suportem operações de criação, leitura e atualização de informações, garantindo a segurança e a qualidade do código por meio de autenticação com JWT e testes automatizados.",
    technologies: [
      "Chai",
      "Docker",
      "JWT",
      "Express",
      "Sinon",
      "MySQL",
      "Sequelize",
      "TypeScript",
    ],
    github: "https://github.com/nataliaschmidt/project-trybesmith",
    isVIdeo: false,
  },
];

export default projectsList;
