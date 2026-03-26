import styles from './Sidebar.module.css';
import Logo from './Logo';
import AppNav from './AppNav';
import { Outlet } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.brandBlock}>
        <Logo />
        <div className={styles.intro}>
          <p className={styles.kicker}>Your journey hub</p>
          <h2>Track the places that matter most.</h2>
          <p className={styles.subtitle}>
            Curated city notes, cleaner navigation, and a more premium travel dashboard look.
          </p>
        </div>
      </div>

      <AppNav />

      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise INC.
        </p>
      </footer>
    </aside>
  );
}
