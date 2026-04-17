import { projects } from "../../data/portifolio";
import FadeInSection from "../FadeInSection/FadeInSection";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projetos" className="section">
      <div className="container">
        <FadeInSection />
        <h2 className="sectionTitle">Projetos</h2>
        <p className="sectionSubtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione.
        </p>
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <FadeInSection />
      </div>
    </section>
  );
}
