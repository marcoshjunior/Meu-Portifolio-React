import { profile } from "../../data/portifolio";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h3>
          {new Date().getFullYear()} {profile.name}
          <span>.</span>
        </h3>
        <p>© Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
