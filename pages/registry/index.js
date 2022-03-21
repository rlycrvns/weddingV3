import { getLayout } from "@components/Layout/PageLayout";
import styles from "../../styles/Page.module.scss";
export default function Registry() {
  return (
    <section className={styles.registry}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Registry</h1>
        </div>
        <div className={styles.wip}>
          Please check back here once you have received your formal invitation.
        </div>
      </div>
    </section>
  );
}

Registry.getLayout = getLayout;
