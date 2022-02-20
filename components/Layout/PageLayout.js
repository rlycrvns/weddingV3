import { useRouter } from "next/router";
import slugify from "slugify";
import { getLayout as getPageLayout } from "./index";
import { AnimatePresence, motion, useTransform, useViewportScroll } from "framer-motion";
import { classNames } from "@lib/utilities";
import styles from "./layout.module.scss";

export default function PageLayout({ children }) {
  const router = useRouter();
  const route = router.route === "/" ? "homepage" : router.route;
  const pageName = slugify(route, { lower: true });

  const { scrollY } = useViewportScroll();
  const marginTop = useTransform(scrollY, [0, 204, 205], [0, 0, 68]);

  return (
    <>
      <motion.main
        className={classNames([styles.main, styles[`page-${pageName}`]])}
        id="main"
        style={{ marginTop }}
      >
        {children}
      </motion.main>
    </>
  );
}

export const getLayout = (page) => getPageLayout(<PageLayout>{page}</PageLayout>);
