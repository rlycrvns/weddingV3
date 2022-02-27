import { classNames } from "@lib/utilities";
import Link from "next/link";
import styles from "./nav.module.scss";
import Triangle from "./Triangle";

const navItems = [
  { link: "", name: "Home" },
  { link: "info", name: "Info" },
  { link: "our-story", name: "Our Story" },
  { link: "registry", name: "Registry" },
  { link: "rsvp", name: "RSVP" }
];

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={classNames([styles.items])}>
        {navItems.map((item, i) => (
          <li className={styles.navLink} key={i}>
            <Link href={`/${item.link}`}>
              <a role="link" tabIndex={0}>
                <span className={styles.text}>{item.name}</span>
                <span className={styles.triangle}>
                  <Triangle />
                </span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
