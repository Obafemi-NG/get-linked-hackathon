import { FC, MouseEventHandler } from "react";
import styles from "./GradientButton.module.css";

type Props = {
  buttonText: string;
  onClickFunction?: MouseEventHandler<HTMLButtonElement>;
  full?: boolean;
};

const GradientButton: FC<Props> = ({
  buttonText,
  onClickFunction,
  full,
}: Props) => {
  return (
    <button
      className={`${styles.btn} ${full ? styles.fullW : ""} `}
      onClick={onClickFunction}
    >
      {buttonText}
    </button>
  );
};

export default GradientButton;
