import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./PageNotFound.module.css";

export default function PageNotFound() {
  return (
    <main className={styles.page}>
      <PageNav />
      <section className={styles.card}>
        <p className={styles.code}>404</p>
        <h1>Page not found.</h1>
        <p>
          The route you opened does not exist yet, but the rest of WorldWise is ready
          for you.
        </p>
        <Link to="/" className="cta">
          Back home
        </Link>
      </section>
    </main>
  );
}
