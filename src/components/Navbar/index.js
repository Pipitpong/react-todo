import { NavLink } from 'react-router-dom'

import styles from './Navbar.module.css'

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.text}>
        <li>
          <NavLink
            exact
            to="/"
            activeClassName={styles.active}
            className={styles.box}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/todo"
            activeClassName={styles.active}
            className={styles.box}
          >
            Todo
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
