import { classNames } from "@lib/utilities";
import Link from "next/link";
import styles from "./nav.module.scss";
import Triangle from "@components/Triangle";

const navItems = [
  { link: "/", name: "Home", target: "_self" },
  { link: "/info", name: "Info", target: "_self" },
  { link: "/our-story", name: "Our Story", target: "_self" },
  { link: "/registry", name: "Registry", target: "_self" },
  { link: "https://rileyandjessicawedding.rsvpify.com", name: "RSVP", target: "_blank" }
];

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={classNames([styles.items])}>
        {navItems.map((item, i) => (
          <li className={styles.navLink} key={i}>
            <Link href={item.link}>
              <a role="link" target={item.target}>
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
