import { FC } from "react";
import styles from "./Logo.module.css";
import { useNavigate } from "react-router-dom";

const Logo: FC = () => {
  const navigate = useNavigate();

  return (
    <p className={styles.logoText} onClick={() => navigate("/")}>
      {" "}
      get<span className={styles.linked}>linked</span>{" "}
    </p>
  );
};

export default Logo;
