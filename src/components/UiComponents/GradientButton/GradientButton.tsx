import { FC, MouseEventHandler } from "react";
import styles from "./GradientButton.module.css";

type Props = {
  buttonText: string;
  onClickFunction?: MouseEventHandler<HTMLButtonElement>;
};

const GradientButton: FC<Props> = ({ buttonText, onClickFunction }: Props) => {
  return (
    <button className={styles.btn} onClick={onClickFunction}>
      {buttonText}
    </button>
  );
};

export default GradientButton;
