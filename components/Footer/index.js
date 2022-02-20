import Link from "next/link";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div>© {new Date().getFullYear()} Riley Cravens</div>
          <div>
            Photography by{" "}
            <Link href="https://thebreiters.com/">
              <a>The Breiters</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
