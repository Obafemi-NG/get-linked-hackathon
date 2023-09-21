import { FC } from "react";

import { motion } from "framer-motion";

import Typewriter from "../../helperComponent/TypeWriter/Typewriter";

import styles from "./Hero.module.css";
import GradientButton from "../../UiComponents/GradientButton/GradientButton";

import typeSetIcon from "../../../assets/icons/typeset_icon.svg";
import heroImage from "../../../assets/images/hero_image.png";
import heroImage2 from "../../../assets/icons/hero_image_2.svg";
import purpleFlare from "../../../assets/images/purple_flare.png";
import chain from "../../../assets/icons/chain.svg";
import fire from "../../../assets/icons/fire.svg";
import WhiteStar from "../../helperComponent/WhiteStar/WhiteStar";
import GrayStar from "../../helperComponent/GrayStar/GrayStar";
import creative from "../../../assets/icons/Creative.svg";

const Hero: FC = () => {
  const handleRegister = () => {};
  return (
    <section className={styles.heroContainer}>
      <img
        src={purpleFlare}
        alt="purple_flare"
        className={styles.purpleFlare}
      />

      <div className={styles.typewriterContainer}>
        <Typewriter
          text="Igniting a Revolution in HR Innovation"
          duration={180}
          infinite={true}
        />
      </div>
      <img
        src={typeSetIcon}
        alt="type_set_icon"
        className={styles.typeSetIcon}
      />
      <div className={styles.heroContent}>
        <WhiteStar left="5rem" />
        <GrayStar right="30rem" top="9rem" />
        <GrayStar left="20rem" bottom="5rem" width="0.8rem" />
        <div className={styles.leftSection}>
          <p className={styles.heroHeader}>
            {" "}
            getlinked{" "}
            <span className={styles.techText}>
              Tech
              <img
                src={creative}
                alt="creative_icon"
                className={styles.creativeIcon}
              />{" "}
            </span>{" "}
            Hackathon <span className={styles.span}> 1.0 </span>
            <span>
              {" "}
              <img
                src={chain}
                alt="chain_icon"
                className={styles.textIcon}
              />{" "}
            </span>
            <span>
              {" "}
              <img
                src={fire}
                alt="fire_icon"
                className={styles.textIcon}
              />{" "}
            </span>
          </p>
          <p className={styles.heroSubheader}>
            {" "}
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <div className={styles.buttonContainer}>
            <GradientButton
              buttonText="Register"
              onClickFunction={handleRegister}
            />
          </div>
        </div>
      </div>
      <img src={heroImage} alt="hero_image" className={styles.heroImage} />
      <motion.img
        // animate={{ rotate: 360 }}
        // transition={{ duration: 3600, repeat: Infinity }}
        src={heroImage2}
        alt="hero_image_2"
        className={styles.heroImage2}
      />
    </section>
  );
};

export default Hero;
