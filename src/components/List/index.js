import styles from "./List.module.css";
// import { Button } from "../../components/Button";
// import { BsTrash } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export function List({ todo, deleteList, toggleList }) {
  return (
    <div className={`${styles.boxList} ${todo.finish ? styles.completed : ""}`}>
      <div className={styles.text}>{todo.text}</div>

      <span>
        <button onClick={toggleList} className={styles.button}>
          <FaCheck sice={15} />
        </button>
        <button onClick={deleteList} className={styles.button}>
          <FaTrash size={15} />
        </button>
      </span>
    </div>
  );
}
