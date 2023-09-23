import { FC } from "react";

import styles from "./PrivacyPolicy.module.css";

import list from "../../../assets/icons/list_terms.svg";
import GradientButton from "../../UiComponents/GradientButton/GradientButton";

import privacyImage from "../../../assets/images/privacy_image.png";
import privacySvg from "../../../assets/icons/privacy.svg";

const PrivacyPolicy: FC = () => {
  const handleClick = () => {};
  return (
    <section className={styles.componentContainer}>
      <div className={styles.componentContent}>
        <div className={styles.leftSide}>
          <p className={styles.componentTitle}>
            {" "}
            Privacy Policy and <br />
            <span className={styles.colouredText}>Terms</span>{" "}
          </p>
          <p className={styles.date}> Last updated on September 12, 2023 </p>
          <p className={styles.componentSubTitle}>
            {" "}
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant{" "}
          </p>
          <div className={styles.detailsContainer}>
            <p className={styles.topDetail}>
              {" "}
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.{" "}
            </p>
            <p className={styles.licensing}> Licensing Policy </p>
            <p className={styles.licensingSubText}>
              {" "}
              Here are terms of our Standard License:{" "}
            </p>
            <div className={styles.policyList}>
              <div className={styles.policy}>
                <img src={list} alt="check_list" className={styles.listIcon} />
                <p className={styles.policyText}>
                  {" "}
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event{" "}
                </p>
              </div>
              <div className={styles.policy}>
                <img src={list} alt="check_list" className={styles.listIcon} />
                <p className={styles.policyText}>
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </p>
              </div>
            </div>
            <div className={styles.btnContainer}>
              <GradientButton
                buttonText="Read More"
                onClickFunction={handleClick}
              />
            </div>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.privacySvg}>
            <img src={privacySvg} alt="privacy_svg" className={styles.svg} />
          </div>
          <img
            src={privacyImage}
            alt="Privacy_image"
            className={styles.privacyImage}
          />
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
