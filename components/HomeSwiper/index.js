import Image from "next/image";
import SwiperCore, { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import styles from "./homeSwiper.module.scss";
import "swiper/css";
import "swiper/css/free-mode";
SwiperCore.use([FreeMode]);

const images = [
  { src: "/images/Jessica+Riley-52.webp", width: 1380, height: 1104 },
  { src: "/images/Jessica+Riley-20.webp", width: 1600, height: 1152 },
  { src: "/images/Jessica+Riley-70.webp", width: 1600, height: 1067 },
  { src: "/images/Jessica+Riley-55.webp", width: 1280, height: 900 },
  { src: "/images/Jessica+Riley-56.webp", width: 1600, height: 1192 },
  { src: "/images/Jessica+Riley-19.webp", width: 1489, height: 1191 },
  { src: "/images/Jessica+Riley-80.webp", width: 1044, height: 905 },
  { src: "/images/Jessica+Riley-27.webp", width: 1600, height: 1208 },
  { src: "/images/Jessica+Riley-2.webp", width: 1600, height: 1249 },
  { src: "/images/Jessica+Riley-39.webp", width: 1600, height: 1067 },
  { src: "/images/Jessica+Riley-3.webp", width: 1600, height: 1067 }
];

export default function HomeSwiper() {
  return (
    <section className={styles.homeSwiper}>
      <div className={styles.container}>
        <Swiper
          spaceBetween={10}
          freeMode={true}
          grabCursor={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            1024: { slidesPerView: 2 }
          }}
        >
          {images.map((image) => {
            return (
              <SwiperSlide key={uuidv4()}>
                <Image
                  src={image.src}
                  alt=""
                  width={image.width}
                  layout="responsive"
                  height={image.height}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
