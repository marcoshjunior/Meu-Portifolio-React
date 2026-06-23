import styles from "./ButtonPrimary.module.css";
import { FaArrowRight } from "react-icons/fa";

function ButtonPrimary({ texto, ...props }) {
  return (
    <a className={styles.primary} {...props}>
      {texto}
      <FaArrowRight className={styles.icon} />
    </a>
  );
}

export default ButtonPrimary;
