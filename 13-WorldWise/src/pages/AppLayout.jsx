import Map from '../components/Map';
import Sidebar from '../components/Sidebar';
import styles from './AppLayout.module.css';

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <div className={styles.backdrop}></div>
      <Sidebar />
      <section
        className={styles.mapPlaceholder}
        aria-label="Map preview placeholder"
      >
        <div className={styles.mapGlow}></div>
        <Map />
      </section>
    </div>
  );
}
