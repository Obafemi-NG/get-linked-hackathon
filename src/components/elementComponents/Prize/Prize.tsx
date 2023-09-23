import { FC } from "react";

import styles from "./Prize.module.css";

import prizeImage from "../../../assets/images/champion.png";
import { prizeData } from "../../../constants/constants";

const Prize: FC = () => {
  return (
    <section className={styles.componentContainer}>
      <div className={styles.componentContent}>
        <div className={styles.top}>
          <p className={styles.componentTitle}>
            {" "}
            Prizes and <span className={styles.colouredText}>Rewards</span>{" "}
          </p>
          <p className={styles.componentSubTitle}>
            {" "}
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.leftSide}>
            <img
              src={prizeImage}
              alt="champion_image"
              className={styles.championImage}
            />
          </div>
          <div className={styles.rightSide}>
            {prizeData.map((data) => {
              return (
                <div
                  className={`${styles.prizeCard} ${
                    data.id === 2 ? styles.firstPrize : styles.otherPrize
                  }`}
                  key={data.id}
                >
                  <img
                    src={data.imgUrl}
                    alt=""
                    className={`${styles.medalImage} ${
                      data.id === 2 ? styles.bigMedalImage : ""
                    }`}
                  />
                  <p className={styles.position}> {data.position} </p>
                  <p className={styles.runner}> Runner </p>
                  <p className={styles.prize}> {data.prize} </p>
                </div>
                // </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prize;
