import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
  return (
    <article className={styles.card}>
      <img
        className={styles.image}
        src={project.image}
        alt={`imagem do projeto ${project.title}`}
      />
      <div className={styles.content}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={styles.stack}>
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className={styles.actions}>
          <a href={project.demo} target="_blank" rel="noreferrer">
            Ver demo
          </a>
          <a href={project.code} target="_blank" rel="noreferrer">
            Código
          </a>
        </div>
      </div>
    </article>
  );
}
