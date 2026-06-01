import { technologies } from "../../data/portifolio";
import FadeInSection from "../FadeInSection/FadeInSection";
import styles from "./Technologies.module.css";

export default function Technologies() {
  return (
    <section id="tecnologias" className="section">
      <div className="container">
        <FadeInSection />
        <h2 className="sectionTitle">Tecnologias</h2>
        <div className={styles.grid}>
          {technologies.map((group) => (
            <article className={styles.card} key={group.title}>
              <h3>{group.title}</h3>
              <div className={styles.tags}>
                {group.items.map((item) => (
                  <div className={styles.skills} key={item.name}>
                    <strong>{item.name}</strong>
                    <p>{item.description}</p>
                  </div>
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
