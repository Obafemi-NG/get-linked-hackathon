import { FC } from "react";
import { SelectInputProps } from "../../../../models/models";

import styles from "./SelectInput.module.css";

const SelectInput: FC<SelectInputProps> = ({
  inputLabel,
  inputName,
  requiredValue,
  inputRef,
  placeholder,
  options,
  small,
}) => {
  return (
    <div
      className={`${styles.inputPair} ${small ? styles.smallInputPair : ""} `}
    >
      <label htmlFor={inputName} className={styles.label}>
        {inputLabel}
      </label>

      <select
        key={inputLabel}
        name={inputName}
        id={inputName}
        required={requiredValue}
        ref={inputRef}
        className={styles.select}
      >
        <option value="" className={styles.placeholder}>
          {placeholder}
        </option>
        {options.map((data) => {
          return (
            <option key={data.id} value={data.id}>
              {" "}
              {data.name}{" "}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput;
