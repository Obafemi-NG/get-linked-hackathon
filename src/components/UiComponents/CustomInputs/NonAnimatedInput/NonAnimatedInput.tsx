import { FC } from "react";

import styles from "./NonAnimatedInput.module.css";

import { InputProps } from "../../../../models/models";

const NonAnimatedInput: FC<InputProps> = ({
  inputLabel,
  inputName,
  requiredValue,
  inputType,
  inputRef,
  placeholder,
}) => {
  return (
    <div className={styles.inputPair}>
      <label
        className={`${styles.label} ${
          inputRef?.current?.value ? styles.shrink : ""
        } `}
        htmlFor={inputName}
      >
        {inputLabel}{" "}
      </label>
      <input
        className={`${styles.input}`}
        type={inputType}
        required={requiredValue}
        ref={inputRef}
        name={inputName}
        placeholder={placeholder}
      />
    </div>
  );
};

export default NonAnimatedInput;
