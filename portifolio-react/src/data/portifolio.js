export const profile = {
  name: "Seu Nome",
  role: "Desenvolvedor Front-end React",
  bio: "Crio interfaces modernas, responsivas e focadas em experiência do usuário. Gosto de transformar ideias em produtos claros e funcionais.",
  email: "seuemail@email.com",
  github: "https://github.com/seuusuario",
  linkedin: "https://www.linkedin.com/in/seuperfil/",
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
    items: ["HTML5", "CSS3", "React", "Responsividade"],
  },
  {
    title: "Backend",
    items: ["JavaScript", "Git", "GitHub", "Vite"],
  },
  {
    title: "Em aprendizado",
    items: ["TypeScript", "Node.js", "UI/UX"],
  },
];

export const projects = [
  {
    title: "Catálogo de Carros",
    description:
      "Aplicação para buscar e filtrar carros, com cards organizados e interface moderna.",
    image: "/src/assets/images/project-1.jpg",
    stack: ["React", "API REST", "CSS Modules"],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfólio Pessoal",
    description:
      "Site de apresentação com seções bem divididas, animações suaves e layout responsivo.",
    image: "/src/assets/images/project-2.jpg",
    stack: ["React", "UI/UX", "Responsivo"],

    demo: "#",
    code: "#",
  },
  {
    title: "Dashboard de Estudos",
    description:
      "Painel com organização de tarefas, progresso e blocos visuais para acompanhamento.",
    image: "/src/assets/images/project-3.jpg",
    stack: ["React", "Componentização", "Design System"],
    demo: "#",
    code: "#",
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
