import { FC } from "react";
import styles from "./Logo.module.css";

const Logo: FC = () => {
  return (
    <div>
      <p className={styles.logoText}>
        {" "}
        get<span className={styles.linked}>linked</span>{" "}
      </p>
    </div>
  );
};

export default Logo;
