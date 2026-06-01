export const profile = {
  name: "Marcos Jr",
  role: "Desenvolvedor de Software",
  bio: "Crio interfaces modernas, responsivas e focadas em experiência do usuário. Gosto de transformar ideias em produtos claros e funcionais.",
  email: "marcosjuniorbrito6@gmail.com",
  github: "https://github.com/marcoshjunior",
  linkedin: "https://www.linkedin.com/in/marcos-junior1",
};

export const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Cursos", href: "#cursos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Contato", href: "#contato" },
];

export const technologies = [
  {
    title: "Frontend",
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
    ],
  },
  {
    title: "Backend",
    items: [
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
    ],
  },
];

export const projects = [
  {
    title: "Conversor de Moedas",
    description:
      "Converte moedas utilizando taxas de câmbio atualizadas por meio de uma API externa.",
    image: "/src/assets/images/img-moeda.png",
    stack: ["HTML", "CSS", "JavaScript", "API"],
    demo: "https://marcoshjunior.github.io/Conversor-de-Moedas/",
    code: "https://github.com/marcoshjunior/Conversor-de-Moedas",
  },
  {
    title: "Calculo de IMC",
    description:
      "Calculadora de Massa Corporal (IMC) e com base no peso e altura informados pelo usuário exibe a sua classificação.",
    image: "/src/assets/images/img-calculoIMC.png",
    stack: ["HTML", "CSS", "JavaScript"],
    demo: "https://marcoshjunior.github.io/CalcularIMC/",
    code: "https://github.com/marcoshjunior/CalcularIMC",
  },
];

export const courses = [
  {
    title: "Gestão da Tecnologia da Informação",
    institution: "Unicesumar",
    description:
      "Foco em gestão de processos de TI, infraestrutura, governança, análise de sistemas e gestão de projetos tecnológicos. Desenvolvimento de conhecimentos em banco de dados, redes, engenharia de software e estratégias para alinhar tecnologia às necessidades do negócio.",
  },
  {
    title: "Google Cloud",
    institution: "Google",
    description:
      "Foco nos fundamentos de computação em nuvem utilizando Google Cloud Platform (GCP), incluindo conceitos de hospedagem, armazenamento, serviços cloud, infraestrutura escalável e deploy de aplicações.",
  },
  {
    title: "Imersão dev back end",
    institution: "Alura",
    description:
      "Curso prático de desenvolvimento back-end com foco na criação de APIs e integração entre aplicações utilizando Node.js, JavaScript, Express e Google Gemini.",
  },
  {
    title: "Lógica de Programação com JavaScript",
    institution: "Alura",
    description:
      "Curso prático dos fundamentos da programação com JavaScript, abordando variáveis, condicionais, loops e funções aplicado ao desenvolvimento.",
  },
];
