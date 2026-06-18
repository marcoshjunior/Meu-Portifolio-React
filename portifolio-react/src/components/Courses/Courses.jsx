import { courses } from "../../data/portifolio";
import FadeInSection from "../FadeInSection/FadeInSection";
import styles from "./Courses.module.css";

export default function Courses() {
  return (
    <section id="cursos" className="section">
      <div className="container">
        <FadeInSection />
        <h2 className="sectionTitle">Formações/Cursos</h2>
        <div className={styles.grid}>
          {courses.map((group) => (
            <article className={styles.card} key={group.title}>
              <div className={styles.year}>
                <p>{group.year}</p>
              </div>
              <div className={styles.info}>
                <div>
                  <p className={styles.institution}>{group.institution}</p>
                  <p className={styles.type}>{group.type}</p>
                </div>
                <h3>{group.title}</h3>
                <p className={styles.description}>{group.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
