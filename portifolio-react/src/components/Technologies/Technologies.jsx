import { technologies } from "../../data/portifolio";
import FadeInSection from "../FadeInSection/FadeInSection";
import styles from "./Technologies.module.css";

export default function Technologies() {
  return (
    <section id="tecnologias" className="section">
      <div className="container">
        <FadeInSection />
        <h2 className="sectionTitle">Tecnologias</h2>
        <p className="sectionSubtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          enim!
        </p>
        <div className={styles.grid}>
          {technologies.map((group) => (
            <article className={styles.card} key={group.title}>
              <h3>{group.title}</h3>
              <div className={styles.tags}>
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <FadeInSection />
      </div>
    </section>
  );
}
