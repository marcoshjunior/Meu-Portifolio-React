import { profile } from "../../data/portifolio";
import FadeInSection from "../FadeInSection/FadeInSection";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className="container">
        <FadeInSection />
        <div className={styles.content}>
          <p className={styles.badge}>Disponivel para freelas e estagio</p>
          <h1>
            Olá, eu sou <span>{profile.name}</span>
          </h1>
          <h2>{profile.role}</h2>
          <p className={styles.text}>{profile.bio}</p>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href="#projetos">
              Ver projetos
            </a>
            <a className={styles.secondaryButton} href="#contato">
              falar comigo
            </a>
          </div>
        </div>
      </div>
      <FadeInSection />
    </section>
  );
}
