import CustomHead from "@components/Head";
import Image from "next/image";
import { getLayout } from "@components/Layout/PageLayout";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <CustomHead />
      <div className={styles.container}>
        <h1>Riley + Jessica</h1>
        <p>August 28, 2022</p>
      </div>
    </>
  );
}

Home.getLayout = getLayout;
