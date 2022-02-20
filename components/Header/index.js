import { useEffect, useState } from "react";
import { FocusOn } from "react-focus-on";
import Nav from "@components/Nav";
import Toggle from "@components/Nav/Toggle";
import styles from "./header.module.scss";
import { AnimatePresence, motion, useTransform, useViewportScroll } from "framer-motion";
import NavMobile from "@components/NavMobile";
import { useWindowDimensions } from "@hooks/useWindowDimensions";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const { scrollY } = useViewportScroll();
  const position = useTransform(scrollY, [0, 205, 210], ["", "", "fixed"]);
  const borderColor = useTransform(
    scrollY,
    [0, 205, 210],
    ["rgba(205, 102, 71, 0)", "rgba(205, 102, 71, 0)", "rgba(205, 102, 71, 1)"]
  );
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
        <div className={styles.info}>
          <p className={styles.names}>Jessica + Riley</p>
          <div className={styles.line}></div>
          <p className={styles.date}>August 28, 2022</p>
        </div>
        <motion.div
          className={styles.navWrapper}
          style={{
            position,
            borderColor
          }}
        >
          <Nav navOpen={navOpen} toggle={(isOpen) => setNavOpen(isOpen)} />
        </motion.div>
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
