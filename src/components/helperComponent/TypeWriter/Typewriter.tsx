import { FC, useEffect, useState } from "react";

import styles from "./Typewriter.module.css";

type Props = {
  duration: number;
  text: string;
  infinite: boolean;
};

const Typewriter: FC<Props> = ({ duration, text, infinite }) => {
  const [typeText, setTypeText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timer: number;
    if (currentIndex <= text.length) {
      timer = setTimeout(() => {
        setTypeText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, duration);
      return () => clearTimeout(timer);
    }
    if (infinite) {
      setTypeText("");
      setCurrentIndex(0);
    }
  }, [duration, currentIndex, text, typeText, infinite]);

  return <div className={styles.typeText}>{typeText}</div>;
};

export default Typewriter;
