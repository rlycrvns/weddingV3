import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Arrow() {
  const [inViewRef, inView] = useInView({
    threshold: 0.25,
    triggerOnce: true
  });

  const variantsAlso = {
    visible: {
      x: 75,
      transition: {
        from: -75,
        delay: 4,
        type: "spring",
        duration: 2.5,
        repeat: Infinity
      }
    },
    hidden: {
      x: 0
    }
  };

  const variants = {
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.5
      }
    },
    hidden: {
      scale: 0
    }
  };
  return (
    <motion.div ref={inViewRef} animate={inView ? "visible" : "hidden"} variants={variants}>
      <motion.div animate={inView ? "visible" : "hidden"} variants={variantsAlso}>
        <svg
          width="143"
          height="46"
          viewBox="0 0 143 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M142.121 25.1213C143.293 23.9497 143.293 22.0503 142.121 20.8787L123.029 1.7868C121.858 0.615224 119.958 0.615224 118.787 1.7868C117.615 2.95837 117.615 4.85786 118.787 6.02944L135.757 23L118.787 39.9706C117.615 41.1421 117.615 43.0416 118.787 44.2132C119.958 45.3848 121.858 45.3848 123.029 44.2132L142.121 25.1213ZM0 26H140V20H0L0 26Z"
            fill="#CD6647"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
