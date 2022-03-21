import { getLayout } from "@components/Layout/PageLayout";
import styles from "../../styles/Story.module.scss";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
export default function OurStory() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dm75wbbnz"
    }
  });
  const jProfile = cld.image(`wedding/jprofile_gosidt.webp`).format("webp").quality("auto");
  const rProfile = cld.image(`wedding/rprofile_vpbq6b.webp`).format("webp").quality("auto");
  return (
    <section className={styles.info}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Our Story</h1>
        </div>
        <div className={styles.content}>
          <div className={styles.group}>
            <div className={styles.img}>
              <AdvancedImage
                cldImg={jProfile}
                plugins={[responsive({ steps: 200 }), placeholder({ mode: "blur" })]}
              />
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.img}>
              <AdvancedImage
                cldImg={rProfile}
                plugins={[responsive({ steps: 200 }), placeholder({ mode: "blur" })]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

OurStory.getLayout = getLayout;
