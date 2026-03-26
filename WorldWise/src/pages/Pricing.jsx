// Uses the same styles as Product
import styles from "./Product.module.css";
import PageNav from "../components/PageNav";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section className={`${styles.hero} ${styles.reverse}`}>
        <div className={`${styles.contentPanel} ${styles.pricingPanel}`}>
          <p className={styles.eyebrow}>Pricing</p>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
          <div className={styles.priceCard}>
            <div>
              <strong>$9</strong>
              <span>per month</span>
            </div>
            <p>One clean plan for travelers who want a simple way to remember places.</p>
          </div>
        </div>
        <div className={styles.mediaPanel}>
          <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
        </div>
      </section>
    </main>
  );
}
