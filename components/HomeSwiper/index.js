import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import SwiperCore, { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import styles from "./homeSwiper.module.scss";
import "swiper/css";
import "swiper/css/free-mode";
import Arrow from "./Arrow";
SwiperCore.use([FreeMode]);

const images = [
  { src: "Jessica_Riley-52_xe4s3v.jpg" },
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
export default function HomeSwiper() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dm75wbbnz"
    }
  });
  return (
    <section className={styles.homeSwiper}>
      <div className={styles.container}>
        <Swiper
          spaceBetween={10}
          freeMode={true}
          grabCursor={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            1024: { slidesPerView: 2.2 }
          }}
        >
          {images.map((image) => {
            const src = cld.image(`wedding/${image.src}`);
            src.format("webp").quality("auto");
            return (
              <SwiperSlide key={uuidv4()}>
                <AdvancedImage
                  cldImg={src}
                  plugins={[
                    responsive({ steps: [320, 800, 1000, 1200, 1600] }),
                    placeholder({ mode: "blur" })
                  ]}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className={styles.arrow}>
          <Arrow />
        </div>
      </div>
    </section>
  );
}
