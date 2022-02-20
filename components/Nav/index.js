import { classNames } from "@lib/utilities";
import Link from "next/link";
import styles from "./nav.module.scss";

const navItems = [
  { link: "", name: "Home" },
  { link: "info", name: "Info" },
  { link: "our-story", name: "Our Story" },
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
                <span>{item.name}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
