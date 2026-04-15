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
          <div className={styles.card}>
            <h3>Quem sou eu</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              quos, officiis iusto tempora inventore officia magni ea ducimus
              consequatur doloribus debitis obcaecati sit quam voluptatum facere
              tenetur et veritatis.
            </p>
          </div>
          <div className={styles.card}>
            <h3>Meu objetivo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus, enim! Laudantium assumenda reiciendis corrupti dolores!
            </p>
          </div>
          <div className={styles.stats}>
            <div>
              <strong>+5</strong>
              <span>Projetos</span>
            </div>
            <div>
              <strong>React</strong>
              <span>principal stack</span>
            </div>
            <div>
              <strong>UI/UX</strong>
              <span>foco visual</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
