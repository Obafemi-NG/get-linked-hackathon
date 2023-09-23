import { FC } from "react";

import styles from "./Sponsors.module.css";

import firstLiberty from "../../../assets/icons/Liberty_company_logo_white_colour.svg";
import secondLiberty from "../../../assets/icons/Liberty_company_logo_white.svg";
import winWise from "../../../assets/icons/Winwise_logo_White_colour.svg";

import whispersms from "../../../assets/icons/wisper_logo_white.svg";
import payBox from "../../../assets/icons/Paybox.svg";
import vuzualplus from "../../../assets/icons/Vuzual_plus.svg";

// const topSponsors =

const Sponsor: FC = () => {
  return (
    <section className={styles.componentContainer}>
      <div className={styles.componentContent}>
        <p className={styles.componentTitle}> Partners and Sponsors </p>
        <p className={styles.componentSubTitle}>
          {" "}
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors{" "}
        </p>
        <div className={styles.sponsorsContainer}>
          <div className={styles.topSponsors}>
            <div className={styles.topLogoContainer}>
              <img
                src={firstLiberty}
                alt="sponsor_logo"
                className={styles.topSponsorLogo}
              />
            </div>
            <div className={styles.topLogoContainer}>
              <img
                src={secondLiberty}
                alt="sponsor_logo"
                className={styles.topSponsorLogo}
              />
            </div>
            <div className={styles.topLogoContainer}>
              <img
                src={winWise}
                alt="sponsor_logo"
                className={styles.topSponsorLogo}
              />
            </div>
          </div>
          <div className={styles.bottomSponsors}>
            <div className={styles.bottomLogoContainer}>
              <img
                src={whispersms}
                alt="sponsor_logo"
                className={styles.bottomSponsorLogo}
              />
            </div>
            <div className={styles.bottomLogoContainer}>
              <img
                src={payBox}
                alt="sponsor_logo"
                className={styles.bottomSponsorLogo}
              />
            </div>
            <div className={styles.bottomLogoContainer}>
              <img
                src={vuzualplus}
                alt="sponsor_logo"
                className={styles.bottomSponsorLogo}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
