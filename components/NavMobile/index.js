import { classNames } from "@lib/utilities";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./navMobile.module.scss";

const navItems = [
  { link: "", name: "Home" },
  { link: "info", name: "Info" },
  { link: "registry", name: "Registry" },
  { link: "rsvp", name: "RSVP" }
];

export default function NavMobile({ toggle }) {
  const navVariant = {
    open: {
      opacity: 1,
      transition: { ease: "easeOut", duration: 0.25 }
    },
    closed: {
      opacity: 0,
      transition: { ease: "easeOut", duration: 0.15, delay: 0.75 }
    }
  };

  const listVariant = {
    open: {
      transition: { staggerChildren: 0.1, delayChildren: 0.25 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const itemVariant = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 8,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };
  return (
    <motion.nav
      className={styles.navMobile}
      variants={navVariant}
      initial="closed"
      animate="open"
      exit="closed"
    >
      <motion.ul className={styles.items} variants={listVariant}>
        {navItems.map((item, i) => (
          <motion.li className={styles.navLink} variants={itemVariant} key={i}>
            <Link href={`/${item.link}`}>
              <a
                onClick={() => toggle(false)}
                onKeyPress={() => toggle(false)}
                role="link"
                tabIndex={0}
              >
                <span>{item.name}</span>
              </a>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
}
