import { profile } from "../../data/portifolio";
import FadeInSection from "../FadeInSection/FadeInSection";
import styles from "./Hero.module.css";
import ButtonPrimary from "../Button/ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../Button/ButtonSecondary/ButtonSecondary";

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className="container">
        <FadeInSection />
        <div className={styles.content}>
          <h1>
            Olá, eu sou <span>{profile.name}</span>
          </h1>
          <div className={styles.line}></div>

          <h2>{profile.role}</h2>

          <p className={styles.subtitle}>{profile.bio}</p>

          <div className={styles.actions}>
            <ButtonPrimary texto="Falar comigo" href="#contato" />
            <ButtonSecondary texto="Ver projetos" href="#projetos" />
          </div>
        </div>
      </div>
      <FadeInSection />
    </section>
  );
}
