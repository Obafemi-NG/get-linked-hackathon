import { FC } from "react";

import styles from "./CusomInput.module.css";

import { InputProps } from "../../../models/models";

const CustomInput: FC<InputProps> = ({
  inputLabel,
  inputName,
  requiredValue,
  inputType,
  inputRef,
}) => {
  return (
    <div className={styles.inputPair}>
      <input
        className={`${styles.input}`}
        type={inputType}
        required={requiredValue}
        ref={inputRef}
        name={inputName}
      />
      <label
        className={`${styles.label} ${
          inputRef?.current?.value ? styles.shrink : ""
        } `}
        htmlFor={inputName}
      >
        {inputLabel}{" "}
      </label>
    </div>
  );
};

export default CustomInput;
