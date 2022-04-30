import { useEffect, useState } from "react";
import { FocusOn } from "react-focus-on";
import Nav from "@components/Nav";
import Toggle from "@components/Nav/Toggle";
import styles from "./header.module.scss";
import { AnimatePresence } from "framer-motion";
import NavMobile from "@components/NavMobile";
import { useWindowDimensions } from "@hooks/useWindowDimensions";
import Link from "next/link";
import Headroom from "react-headroom";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const screenSize = useWindowDimensions();
  useEffect(() => {
    if (screenSize.width >= 768) {
      setNavOpen(false);
    }
  }, [screenSize]);
  return (
    <header className={styles.header}>
      <a className={styles.skipToContentLink} href="#main">
        Skip to Content
      </a>
      <div className={styles.container}>
        <Link href="/">
          <a>
            <div className={styles.info}>
              <p className={styles.names}>Jessica + Riley</p>
              <div className={styles.line}></div>
              <p className={styles.date}>August 28, 2022</p>
            </div>
          </a>
        </Link>
        <div className={styles.navWrapper}>
          <Nav navOpen={navOpen} toggle={(isOpen) => setNavOpen(isOpen)} />
        </div>
      </div>
      <FocusOn enabled={navOpen}>
        <Toggle navOpen={navOpen} toggle={(isOpen) => setNavOpen(isOpen)} />
        <AnimatePresence>
          {navOpen && <NavMobile toggle={(isOpen) => setNavOpen(isOpen)} />}
        </AnimatePresence>
      </FocusOn>
    </header>
  );
}
