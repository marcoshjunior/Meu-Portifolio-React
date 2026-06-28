import imgMoeda from "/src/assets/images/img-moeda.png";
import imgCalculoIMC from "/src/assets/images/img-calculoIMC.png";
import imgAdvinhacao from "/src/assets/images/img-advinhacao.png";
import imgLinktree from "/src/assets/images/img-linktree.png";

export const profile = {
  name: "Marcos Jr",
  role: "Desenvolvedor de Software",
  bio: "Desenvolvedor focado em projetos modernos, responsivos e em experiência do usuário. Gosto de transformar ideias em produtos claros e funcionais.",
  email: "marcosjuniorbrito6@gmail.com",
  github: "https://github.com/marcoshjunior",
  linkedin: "https://www.linkedin.com/in/marcos-junior1",
};

export const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Cursos", href: "#cursos" },
  { label: "Contato", href: "#contato" },
];

export const technologies = [
  {
    title: "Tecnologias que utilizo",
    items: [
      {
        name: "HTML5",
        description: "Estruturação semântica de páginas",
      },
      {
        name: "CSS3",
        description: "Layouts responsivos e estilização",
      },
      {
        name: "React",
        description: "Criação de interfaces e componentização",
      },
      {
        name: "JavaScript",
        description: "Lógica e manipulação de dados",
      },
      {
        name: "Git",
        description: "Controle de versão",
      },
      {
        name: "GitHub",
        description: "Hospedagem e colaboração de código",
      },
    ],
  },
  {
    title: "Em aprendizado",
    items: [
      {
        name: "TypeScript",
        description: "Tipagem para JavaScript",
      },
      {
        name: "Node.js",
        description: "Criação de APIs REST",
      },
      {
        name: "Express",
        description: "Rotas e middleware para APIs",
      },
      {
        name: "MongoDB",
        description: "Modelagem e consulta de dados",
      },
      {
        name: "Google Cloud",
        description: "Deploy e gerenciamento de aplicações",
      },
    ],
  },
];

export const projects = [
  {
    title: "Conversor de Moedas",
    description:
      "Converte moedas utilizando taxas de câmbio atualizadas por meio de uma API externa.",
    image: imgMoeda,
    stack: ["HTML", "CSS", "JavaScript", "API"],
    demo: "https://marcoshjunior.github.io/Conversor-de-Moedas/",
    code: "https://github.com/marcoshjunior/Conversor-de-Moedas",
  },
  {
    title: "Calculo de IMC",
    description:
      "Calculadora de Massa Corporal (IMC) e com base no peso e altura informados pelo usuário exibe a sua classificação.",
    image: imgCalculoIMC,
    stack: ["HTML", "CSS", "JavaScript"],
    demo: "https://marcoshjunior.github.io/CalcularIMC/",
    code: "https://github.com/marcoshjunior/CalcularIMC",
  },
  {
    title: "Jogo da Advinhação",
    description:
      "Jogo interativo onde o usuário tenta advinhar um número aleatório gerado pelo sistema. O projeto foi criado para praticar lógica condicional e geração de números aleatórios",
    image: imgAdvinhacao,
    stack: ["HTML", "CSS", "JavaScript"],
    demo: "https://marcoshjunior.github.io/Adivinhacao/",
    code: "https://github.com/marcoshjunior/Adivinhacao",
  },
  {
    title: "Linktree",
    description:
      "Pagina estilo 'linktree' para reunir links de redes sociais e projetos em um só lugar, com foco em uma interface limpa, responsiva e agradável",
    image: imgLinktree,
    stack: ["HTML", "CSS"],
    demo: "https://marcoshjunior.github.io/Links/",
    code: "https://github.com/marcoshjunior/Links",
  },
];

export const courses = [
  {
    title: "Gestão da Tecnologia da Informação",
    institution: "Unicesumar",
    type: "Graduação",
    year: "2023 - 2026",
    description:
      "Foco em gestão de processos de TI, infraestrutura, governança, análise de sistemas e gestão de projetos tecnológicos. Desenvolvimento de conhecimentos em banco de dados, redes, engenharia de software e estratégias para alinhar tecnologia às necessidades do negócio.",
  },
  {
    title: "Google Cloud",
    institution: "Google",
    type: "Certificação",
    year: "2026",
    description:
      "Foco nos fundamentos de computação em nuvem utilizando Google Cloud Platform (GCP), incluindo conceitos de hospedagem, armazenamento, serviços cloud, infraestrutura escalável e deploy de aplicações.",
  },
  {
    title: "Imersão dev back end",
    institution: "Alura",
    type: "Curso",
    year: "2024",
    description:
      "Curso prático de desenvolvimento back-end com foco na criação de APIs e integração entre aplicações utilizando Node.js, JavaScript, Express e Google Gemini.",
  },
];
