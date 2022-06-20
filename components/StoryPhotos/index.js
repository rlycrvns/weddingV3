import { AdvancedImage, responsive, placeholder, lazyload } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { v4 as uuidv4 } from "uuid";
import styles from "./storyPhotos.module.scss";

const images = [
  { src: "story_1_ynjn7y.jpg" },
  { src: "story_2_xeyirk.jpg" },
  { src: "story_3_cjfgur.jpg" },
  { src: "story_5_unn4jl.jpg" },
  { src: "story_6_o0y29f.jpg" },
  { src: "story_7_qd82vs.jpg" },
  { src: "story_9_xwcnrv.jpg" },
  { src: "story_10_o5nzyo.jpg" },
  { src: "story_11_zfftef.jpg" },
  { src: "story_12_fsm12l.jpg" },
  { src: "story_13_smpoov.jpg" },
  { src: "story_14_ys6nz3.jpg" },
  { src: "story_15_fg1zua.jpg" },
  { src: "story_16_nbpawy.jpg" },
  { src: "story_17_ocbxnd.jpg" },
  { src: "story_18_xctgdx.jpg" },
  { src: "story_19_myykjl.jpg" },
  { src: "story_20_c1rako.jpg" },
  { src: "story_21_p3lzin.jpg" },
  { src: "story_24_pto8vr.jpg" },
  { src: "story_23_e5rxjf.jpg" },
  { src: "story_22_lbzba5.jpg" },
  { src: "story_26_nw8rme.jpg" },
  { src: "story_27_iky00m.jpg" },
  { src: "story_31_z8nvjh.jpg" },
  { src: "story_32_b3ybgd.jpg" },
  { src: "story_34_p39ph8.jpg" },
  { src: "story_33_vxzynx.jpg" },
  { src: "story_25_soliju.jpg" },
  { src: "story_28_bgi468.jpg" },
  { src: "story_29_fy1x7g.jpg" },
  { src: "story_30_jggeax.jpg" },
  { src: "story_4_kls5bi.jpg" }
];
export default function StoryPhotos() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dm75wbbnz"
    }
  });
  return (
    <section className={styles.storyPhotos}>
      {images.map((image) => {
        const src = cld.image(`wedding/${image.src}`);
        src.format("webp").quality("auto");
        return (
          <div className={styles.image} key={uuidv4()}>
            <AdvancedImage
              cldImg={src}
              plugins={[
                responsive({ steps: [320, 800, 1000, 1600, 2000] }),
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
