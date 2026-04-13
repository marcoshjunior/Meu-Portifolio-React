import { useState } from "react";
import { navLinks } from "../../data/portifolio";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.logo} href="#inicio">
          SeuNome<span>.</span>
        </a>
        <button
          className={styles.menuButton}
          onClick={() => setOpen((value) => !value)}
          aria-label="Abrir menu"
          aril-expanded={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
