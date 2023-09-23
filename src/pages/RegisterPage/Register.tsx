import { FC, FormEvent, useEffect, useRef, useState } from "react";

import styles from "./RegisterPage.module.css";

import { motion } from "framer-motion";

import GradientButton from "../../components/UiComponents/GradientButton/GradientButton";

import registerImage from "../../assets/images/register_image.png";
import womanWalking from "../../assets/icons/woman_walking.svg";
import manWalking from "../../assets/icons/man_walking.svg";
import NonAnimatedInput from "../../components/UiComponents/CustomInputs/NonAnimatedInput/NonAnimatedInput";
import SelectInput from "../../components/UiComponents/CustomInputs/SelectInput/SelectInput";
import NavBar from "../../components/elementComponents/NavBar/NavBar";
import { fetchFuntion } from "../../utils/fetchFunction";
import { SelectOption } from "../../models/models";
import Modal from "../../components/helperComponent/Modal/Modal";
import LeftRevealSpringy from "../../components/helperComponent/LeftRevealSpringy";

const Register: FC = () => {
  const [options, setOptions] = useState<SelectOption[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const teamNameRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const projectTopicRef = useRef<HTMLInputElement | null>(null);
  const categoryRef = useRef<HTMLSelectElement | null>(null);
  const groupSizeRef = useRef<HTMLSelectElement | null>(null);

  const [agree, setAgree] = useState(true);
  const checkboxHandler = () => {
    setAgree(!agree);
    console.log(agree);
  };

  const handleClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fetchCategory = async () => {
      const url = "https://backend.getlinked.ai/hackathon/registration";
      const userData = {
        team_name: teamNameRef.current?.value,
        phone_number: phoneRef.current?.value,
        email: emailRef.current?.value,
        project_topic: projectTopicRef.current?.value,
        category: categoryRef.current?.value,
        group_size: groupSizeRef.current?.value,
        privacy_poclicy_accepted: agree,
      };
      const fetchedData = await fetchFuntion("POST", url, userData);
      console.log(fetchedData);
      setShowModal(true);
    };
    try {
      fetchCategory();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchCategory = async () => {
      const url = "https://backend.getlinked.ai/hackathon/categories-list";
      const fetchedData = await fetchFuntion("GET", url);
      setOptions(fetchedData);
      console.log(fetchedData);
    };
    try {
      fetchCategory();
    } catch (error) {
      console.log(error);
    }
  }, []);
  const groupSize = [
    { id: 1, name: "1 - 5" },
    { id: 2, name: "5 - 10" },
    { id: 3, name: "10 - 15" },
    { id: 4, name: "15 - 20" },
  ];

  return (
    <section className={styles.pageContainer}>
      <div className={styles.navbarContainer}>
        <NavBar />
      </div>
      <div className={styles.pageContent}>
        <div className={styles.leftSide}>
          <LeftRevealSpringy>
            <img
              src={registerImage}
              alt="register_img"
              className={styles.pageImage}
            />
          </LeftRevealSpringy>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, type: "tween" }}
          className={styles.rightSide}
        >
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
                  small={false}
                />
                <SelectInput
                  inputLabel="Group Size"
                  inputName="groupSize"
                  placeholder="Select"
                  requiredValue={true}
                  inputRef={groupSizeRef}
                  options={groupSize}
                  small={true}
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
        </motion.div>
      </div>
      {showModal && <Modal />}
    </section>
  );
};

export default Register;
