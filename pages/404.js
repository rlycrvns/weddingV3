import CustomHead from "@components/Head";
import { getLayout } from "@components/Layout/PageLayout";
import styles from "../styles/Page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <CustomHead />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>
            You've lost your way, lets go back{" "}
            <Link href="/">
              <a>Home</a>
            </Link>
          </h1>
        </div>
      </div>
    </>
  );
}

Home.getLayout = getLayout;
