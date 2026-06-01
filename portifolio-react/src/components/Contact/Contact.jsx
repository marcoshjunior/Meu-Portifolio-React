import styles from "./Contact.module.css";
import { profile } from "../../data/portifolio";

export default function Contact() {
  return (
    <section id="contato" className="section">
      <div className={`container ${styles.container}`}>
        <h2 className="sectionTitle">Contato</h2>
        <p className="sectionSubtitle">
          Tem uma oportunidade, projeto ou quer trocar uma ideia sobre
          tecnologia? Entre em contato comigo!
        </p>

        <a href={`malito: ${profile.email}`} className={styles.emailButton}>
          Enviar email
        </a>

        <div className={styles.links}>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            Linkedin
          </a>
        </div>
      </div>
    </section>
  );
}
