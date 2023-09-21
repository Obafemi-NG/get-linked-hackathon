import { FC } from "react";

import { motion } from "framer-motion";

import styles from "./WhiteStar.module.css";

import whiteStar from "../../../assets/icons/white_star.svg";

type StyleProps = {
  bottom?: string;
  top?: string;
  right?: string;
  left?: string;
};

const WhiteStar: FC<StyleProps> = ({ bottom, top, right, left }) => {
  return (
    <motion.img
      style={{ bottom: bottom, top: top, right: right, left: left }}
      animate={{ scale: 1.2 }}
      transition={{
        duration: 1.2,
        type: "tween",
        repeat: Infinity,
        repeatDelay: 0.7,
      }}
      src={whiteStar}
      alt="white_star"
      className={styles.whiteStar}
    />
  );
};

export default WhiteStar;
