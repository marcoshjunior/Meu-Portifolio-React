import styles from "./ButtonSecondary.module.css";
import { FaArrowRight } from "react-icons/fa";

function ButtonSecondary({ texto, href }) {
  return (
    <a className={styles.secondary} href={href}>
      <span className={styles.text}>{texto}</span>
      <FaArrowRight className={styles.icon} />
    </a>
  );
}
export default ButtonSecondary;
