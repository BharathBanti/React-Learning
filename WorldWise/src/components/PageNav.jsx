import { NavLink } from 'react-router-dom';
import styles from './PageNave.module.css';
import Logo from './Logo';

export default function PageNav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>
        <div className={styles.logoWrap}>
          <Logo />
        </div>
      </div>

      <div className={styles.menu}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/login" className={styles.ctaLink}>Login</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
