import { courses } from "../../data/portifolio";
import FadeInSection from "../FadeInSection/FadeInSection";
import styles from "./Courses.module.css";

export default function Courses() {
  return (
    <section id="cursos" className="section">
      <div className="container">
        <FadeInSection />
        <h2 className="sectionTitle">Cursos</h2>
        <p className="sectionSubtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          enim!
        </p>
        <div className={styles.grid}>
          {courses.map((group) => (
            <article className={styles.card} key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
