import styles from "./ProjectCard.module.css";
import ButtonTertiary from "../Button/ButtonTertiary/ButtonTertiary";

export default function ProjectCard({ project }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={project.image}
          alt={`imagem do projeto ${project.title}`}
        />
      </div>
      <div className={styles.content}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={styles.stack}>
          {project.stack.map((item) => (
            <div className={styles.stack_item}>
              <span key={item} className={styles.stack_label}>
                {item}
              </span>
            </div>
          ))}
        </div>
        <div className={styles.actions}>
          <ButtonTertiary
            texto={"Abrir projeto"}
            href={project.demo}
            target="_blank"
            rel="noreferrer"
          />
          <ButtonTertiary
            texto={"Código"}
            href={project.code}
            target="_blank"
            rel="noreferrer"
          />
        </div>
      </div>
    </article>
  );
}
