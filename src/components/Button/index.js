import styles from './Button.modules.css'

export function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>
}
