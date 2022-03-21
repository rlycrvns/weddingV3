import { getLayout } from "@components/Layout/PageLayout";
import styles from "../../styles/Page.module.scss";
export default function Rsvp() {
  return (
    <section className={styles.rsvp}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>RSVP</h1>
        </div>
        <div className={styles.wip}>
          Please check back here once you have received your formal invitation.
        </div>
      </div>
    </section>
  );
}

Rsvp.getLayout = getLayout;
