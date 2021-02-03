import styles from "./Input.module.css";

export function Input({ text, setText }) {
  return (
    <input
      className={styles.input}
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Type someting..."
    />
  );
}
