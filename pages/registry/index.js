import { getLayout } from "@components/Layout/PageLayout";
import Link from "next/link";
import styles from "../../styles/Page.module.scss";
export default function Registry() {
  return (
    <section className={styles.rsvp}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Registry</h1>
        </div>
        <div className={styles.content}>
          <div className={styles.group}>
            <h2>Honeymoon</h2>
            <div className={styles.divider}></div>
            <ul>
              <li className={styles.textCenter}>
                We already have most of the things we need, and after the last two years being
                cooped up inside we would love to take the honeymoon of our dreams.
              </li>
              <li>
                <Link href="https://www.travelersjoy.com/jessicaandriley">
                  <a className={styles.button} target="_blank">
                    View Registry<div className={styles.button__horizontal}></div>
                    <div className={styles.button__vertical}></div>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.group}>
            <h2>Gift</h2>
            <div className={styles.divider}></div>
            <ul>
              <li className={styles.textCenter}>
                If you prefer a traditional registry we have compiled a list of items we would
                appreciate having.
              </li>
              <li>
                <Link href="https://www.myregistry.com/wedding-registry/jessica-baron-and-riley-cravens-portland-or/3295907/giftlist">
                  <a className={styles.button} target="_blank">
                    View Registry<div className={styles.button__horizontal}></div>
                    <div className={styles.button__vertical}></div>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

Registry.getLayout = getLayout;
