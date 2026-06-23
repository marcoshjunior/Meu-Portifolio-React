import styles from "./ButtonTertiary.module.css";
import { FaArrowRight } from "react-icons/fa";

function ButtonTertiary({ texto, ...props }) {
  return (
    <a className={styles.tertiary} {...props}>
      {texto}
      <FaArrowRight className={styles.icon} />
    </a>
  );
}

export default ButtonTertiary;
