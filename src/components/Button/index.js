import styles from "./Button.module.css";
import { BiPlusMedical } from "react-icons/bi";

export function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className={styles.radius}>
      {children}
      <BiPlusMedical size={15} />
    </button>
  );
}
