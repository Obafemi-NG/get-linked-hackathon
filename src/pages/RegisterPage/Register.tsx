import { FC, useRef, useState } from "react";

import styles from "./RegisterPage.module.css";

import GradientButton from "../../components/UiComponents/GradientButton/GradientButton";

import registerImage from "../../assets/images/register_image.png";
import womanWalking from "../../assets/icons/woman_walking.svg";
import manWalking from "../../assets/icons/man_walking.svg";
import NonAnimatedInput from "../../components/UiComponents/CustomInputs/NonAnimatedInput/NonAnimatedInput";
import SelectInput from "../../components/UiComponents/CustomInputs/SelectInput/SelectInput";

const Register: FC = () => {
  const handleClick = () => {};
  const teamNameRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const projectTopicRef = useRef<HTMLInputElement | null>(null);
  const categoryRef = useRef<HTMLSelectElement | null>(null);
  const groupSizeRef = useRef<HTMLSelectElement | null>(null);
  const options = [
    { id: 1, name: "jksks" },
    { id: 1, name: "jkspdld" },
    { id: 1, name: "jopoeks" },
  ];
  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    setAgree(!agree);
  };
  return (
    <section className={styles.pageContainer}>
      <div className={styles.pageContent}>
        <div className={styles.leftSide}>
          <img
            src={registerImage}
            alt="register_img"
            className={styles.pageImage}
          />
        </div>
        <div className={styles.rightSide}>
          <div className={styles.formContainer}>
            <h1 className={styles.formTitle}>Register</h1>
            <p className={styles.subTitle}>
              {" "}
              Be part of this movement!{" "}
              <span className={styles.walkPath}>
                <img src={womanWalking} alt="" />
                <img src={manWalking} alt="" />
              </span>{" "}
            </p>
            <h1 className={styles.createAccount}> CREATE YOUR ACCOUNT </h1>
            <form action="" className={styles.form} onSubmit={handleClick}>
              <div className={styles.inputsContainer}>
                <NonAnimatedInput
                  inputLabel="Team's Name"
                  inputName="teamName"
                  inputType="text"
                  requiredValue={true}
                  placeholder="Enter the name of your group"
                  inputRef={teamNameRef}
                />
                <NonAnimatedInput
                  inputLabel="Phone"
                  inputName="phoneNumber"
                  inputType="text"
                  requiredValue={true}
                  placeholder="Enter your phone number"
                  inputRef={phoneRef}
                />
                <NonAnimatedInput
                  inputLabel="Email"
                  inputName="email"
                  inputType="email"
                  requiredValue={true}
                  placeholder="Enter your email address"
                  inputRef={emailRef}
                />
                <NonAnimatedInput
                  inputLabel="Project Topic"
                  inputName="projectTopic"
                  inputType="text"
                  requiredValue={true}
                  placeholder="What is your group project topic"
                  inputRef={projectTopicRef}
                />
                <SelectInput
                  inputLabel="Category"
                  inputName="category"
                  placeholder="Select your category"
                  requiredValue={true}
                  inputRef={categoryRef}
                  options={options}
                />
                <SelectInput
                  inputLabel="Group Size"
                  inputName="groupSize"
                  placeholder="Select"
                  requiredValue={true}
                  inputRef={groupSizeRef}
                  options={options}
                />
              </div>
              <p className={styles.warning}>
                Please review your registration details before submitting
              </p>
              <div className={styles.termsContainer}>
                <input
                  type="checkbox"
                  id="agree"
                  onChange={checkboxHandler}
                  className={styles.termsCheckbox}
                />
                <label htmlFor="agree" className={styles.terms}>
                  I agreed with the event terms and conditions and privacy
                  policy
                </label>
              </div>
              <div className={styles.btnContainer}>
                <GradientButton buttonText="Register Now" full={true} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
