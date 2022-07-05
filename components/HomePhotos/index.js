import { AdvancedImage, responsive, placeholder, lazyload } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { v4 as uuidv4 } from "uuid";
import styles from "./homePhotos.module.scss";

const images = [
  { src: "Jessica_Riley-52_xe4s3v.jpg" },
  { src: "Jessica_Riley-33_icpegv.jpg" },
  { src: "Jessica_Riley-20_abrjwd.jpg" },
  { src: "Jessica_Riley-70_imuvsb.jpg" },
  { src: "Jessica_Riley-55_japhwj.jpg" },
  { src: "Jessica_Riley-56_tamb0t.jpg" },
  { src: "Jessica_Riley-39_muudxg.jpg" },
  { src: "Jessica_Riley-80_mmjryf.jpg" },
  { src: "Jessica_Riley-27_c6sljr.jpg" },
  { src: "Jessica_Riley-2_h8nci5.jpg" },
  { src: "Jessica_Riley-39_muudxg.jpg" },
  { src: "Jessica_Riley-3_lf656s.jpg" }
];
export default function HomePhotos() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dm75wbbnz"
    }
  });
  return (
    <section className={styles.homePhotos}>
      {images.map((image) => {
        const src = cld.image(`wedding/${image.src}`);
        src.format("webp").quality("auto");
        return (
          <div className={styles.image} key={uuidv4()}>
            <AdvancedImage
              cldImg={src}
              plugins={[
                responsive({ steps: [800, 1000, 1600, 2000] }),
                placeholder({ mode: "blur" }),
                lazyload({ rootMargin: "10px 20px 10px 30px", threshold: 0.25 })
              ]}
            />
          </div>
        );
      })}
    </section>
  );
}
