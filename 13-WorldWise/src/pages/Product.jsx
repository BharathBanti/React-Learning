import styles from "./Product.module.css";
import PageNav from "../components/PageNav";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section className={styles.hero}>
        <div className={styles.mediaPanel}>
          <img
            src="img-1.jpg"
            alt="person with dog overlooking mountain with sunset"
          />
        </div>
        <div className={styles.contentPanel}>
          <p className={styles.eyebrow}>Product</p>
          <h2>About WorldWide.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </p>
          <div className={styles.featureGrid}>
            <article>
              <span>Smart notes</span>
              <p>Keep your travel memories organized in one calm workspace.</p>
            </article>
            <article>
              <span>Map-first flow</span>
              <p>See places, stories, and destinations in one connected view.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
