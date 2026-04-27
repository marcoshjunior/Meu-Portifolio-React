import { profile } from "../../data/portifolio";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <p>
            © {new Date().getFullYear()} {profile.name}. Todos os direitos
            reservados.
          </p>
          <div className={styles.links}>
            <a href="#inicio">Início</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
