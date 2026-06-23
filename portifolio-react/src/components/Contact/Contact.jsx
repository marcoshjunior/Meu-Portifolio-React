import styles from "./Contact.module.css";
import { profile } from "../../data/portifolio";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ButtonPrimary from "../Button/ButtonPrimary/ButtonPrimary";

export default function Contact() {
  return (
    <section id="contato" className="section">
      <div className={`container ${styles.container}`}>
        <div className={styles.contato}>
          <h2 className="sectionTitle">Contato</h2>
          <p className="sectionSubtitle">
            Estou aberto a novas oportunidades, parcerias ou simplesmente trocar
            uma ideia sobre tecnologia. Me envie um e-mail e responderei o mais
            rápido possível.
          </p>

          <div className={styles.emailButton}>
            <ButtonPrimary
              texto="Enviar e-mail"
              href={`malito: ${profile.email}`}
            />
          </div>
        </div>

        <div className={styles.links}>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <FaGithub />
            <span>GitHub</span>
          </a>

          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin />
            <span>Linkedin</span>
          </a>
        </div>
      </div>
    </section>
  );
}
