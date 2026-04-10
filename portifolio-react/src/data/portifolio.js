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
    items: ["React", "JavaScript", "HTML5", "CSS3", "Responsividade"],
  },
  {
    title: "Ferramentas",
    items: ["Git", "GitHub", "Vite", "Figma", "VS Code"],
  },
  {
    title: "Em aprendizado",
    items: ["TypeScript", "Next.js", "Node.js", "Tailwind CSS"],
  },
];

export const projects = [
  {
    title: "Catálogo de Carros",
    description:
      "Aplicação para buscar e filtrar carros, com cards organizados e interface moderna.",
    stack: ["React", "API REST", "CSS Modules"],
    image: "/src/assets/images/project-1.jpg",
    demo: "#",
    code: "#",
  },
  {
    title: "Portfólio Pessoal",
    description:
      "Site de apresentação com seções bem divididas, animações suaves e layout responsivo.",
    stack: ["React", "UI/UX", "Responsivo"],
    image: "/src/assets/images/project-2.jpg",
    demo: "#",
    code: "#",
  },
  {
    title: "Dashboard de Estudos",
    description:
      "Painel com organização de tarefas, progresso e blocos visuais para acompanhamento.",
    stack: ["React", "Componentização", "Design System"],
    image: "/src/assets/images/project-3.jpg",
    demo: "#",
    code: "#",
  },
];
