import { FC, ReactElement, useEffect, useRef } from "react";

import { motion, useAnimation, useInView } from "framer-motion";

interface Props {
  children: ReactElement;
}

const revealVariant = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      delay: 1.1,
    },
  },
};

const LeftRevealSpringy: FC<Props> = ({ children }) => {
  const animateRef = useRef(null);
  const isInView = useInView(animateRef, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={animateRef} style={{ overflow: "hidden" }}>
      <motion.div
        variants={revealVariant}
        initial="hidden"
        animate={mainControls}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default LeftRevealSpringy;
