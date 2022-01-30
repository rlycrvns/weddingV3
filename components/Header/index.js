import { useState } from "react";
import { FocusOn } from "react-focus-on";
import Nav from "@components/Nav";
import Toggle from "@components/Nav/Toggle";
import styles from "./header.module.scss";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className={styles.header}>
      <FocusOn enabled={navOpen}>
        <a className={styles.skipToContentLink} href="#main">
          Skip to Content
        </a>
        <div className={styles.container}>
          <div className={styles.info}>
            <p className={styles.names}>Jessica + Riley</p>
            <p className={styles.date}>August 28, 2022</p>
          </div>
          <Nav navOpen={navOpen} toggle={(isOpen) => setNavOpen(isOpen)} />
          <Toggle navOpen={navOpen} toggle={(isOpen) => setNavOpen(isOpen)} />
        </div>
      </FocusOn>
    </header>
  );
}
