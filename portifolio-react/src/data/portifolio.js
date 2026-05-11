export const profile = {
  name: "Seu Nome",
  role: "Desenvolvedor Front-end React",
  bio: "Crio interfaces modernas, responsivas e focadas em experiência do usuário. Gosto de transformar ideias em produtos claros e funcionais.",
  email: "seuemail@email.com",
  github: "https://github.com/seuusuario",
  linkedin: "https://www.linkedin.com/in/seuperfil/",
};

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export const technologies = [
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "React", "Responsividade"],
  },
  {
    title: "Backend",
    items: ["JavaScript", "C#"],
  },
  {
    title: "Ferramentas",
    items: ["Git", "GitHub", "Vite", "Figma", "VS Code"],
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
