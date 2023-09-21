import { FC } from "react";

import { motion } from "framer-motion";

import styles from "./GrayStar.module.css";

import grayStar from "../../../assets/icons/gray_star.svg";

type StyleProps = {
  bottom?: string;
  top?: string;
  right?: string;
  left?: string;
  width?: string;
};

const GrayStar: FC<StyleProps> = ({ bottom, top, right, left, width }) => {
  return (
    <motion.img
      style={{
        bottom: bottom,
        top: top,
        right: right,
        left: left,
        width: width,
      }}
      animate={{ scale: 1.2 }}
      transition={{
        duration: 1.2,
        type: "tween",
        repeat: Infinity,
        delay: 0.7,
      }}
      src={grayStar}
      alt="white_star"
      className={styles.whiteStar}
    />
  );
};

export default GrayStar;
