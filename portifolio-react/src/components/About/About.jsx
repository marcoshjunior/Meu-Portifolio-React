import FadeInSection from "../FadeInSection/FadeInSection";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <FadeInSection />
        <h2 className="sectionTitle">Sobre mim</h2>
        <p className="sectionSubtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quis
          exercitationem unde incidunt.
        </p>
        <div className={styles.grid}>
          <article className={styles.card}>
            <h3>Quem sou eu</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              quos, officiis iusto tempora inventore officia magni ea ducimus
              consequatur doloribus debitis obcaecati sit quam voluptatum facere
              tenetur et veritatis.
            </p>
          </article>
          <article className={styles.card}>
            <h3>Meu objetivo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus, enim! Laudantium assumenda reiciendis corrupti dolores!
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
