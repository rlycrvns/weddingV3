import CustomHead from "@components/Head";
import { getLayout } from "@components/Layout/PageLayout";
import styles from "../styles/Home.module.scss";
import HomePhotos from "@components/HomePhotos";

export default function Home() {
  return (
    <>
      <CustomHead />
      <div className={styles.container}>
        <HomePhotos />
      </div>
    </>
  );
}

Home.getLayout = getLayout;
