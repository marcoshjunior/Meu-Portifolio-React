import styles from "./ButtonSecondary.module.css";
import { FaArrowRight } from "react-icons/fa";

function ButtonSecondary({ texto, ...props }) {
  return (
    <a className={styles.secondary} {...props}>
      <span className={styles.text}>{texto}</span>
      <FaArrowRight className={styles.icon} />
    </a>
  );
}
export default ButtonSecondary;
