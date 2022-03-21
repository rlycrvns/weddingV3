import CustomHead from "@components/Head";
import Image from "next/image";
import { getLayout } from "@components/Layout/PageLayout";
import styles from "../styles/Home.module.scss";
import HomeSwiper from "@components/HomeSwiper";

export default function Home() {
  return (
    <>
      <CustomHead />
      <div className={styles.container}>
        <HomeSwiper />
      </div>
    </>
  );
}

Home.getLayout = getLayout;
