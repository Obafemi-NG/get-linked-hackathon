import { FC } from "react";

import styles from "./TimelineComponent.module.css";
import { timelineData } from "../../../constants/constants";

const TimeilineComponent: FC = () => {
  return (
    <section className={styles.componentContainer}>
      <div className={styles.componentContent}>
        <p className={styles.componentTitle}> Timeline </p>
        <p className={styles.componentSubTitle}>
          {" "}
          Here is the breakdown of the time we anticipate using for the upcoming
          event.{" "}
        </p>
        <div className={styles.timelineListContainer}>
          {timelineData.map((data) => {
            return (
              <div
                key={data.id}
                className={styles.timelineContainer}
                id="timeline"
              >
                <div className={styles.border}>
                  <div className={styles.line}></div>
                  <div className={styles.idContainer}> {data.id} </div>
                </div>
                <div
                  className={`${styles.timelineContent} ${
                    data.alternate
                      ? styles.alternateContent
                      : styles.nonAlternateContent
                  } `}
                >
                  <div className={styles.details}>
                    <p className={styles.timelineTitle}> {data.title} </p>
                    <p className={styles.timelineDescription}>
                      {" "}
                      {data.description}{" "}
                    </p>
                  </div>
                  <p className={styles.date}> {data.date} </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimeilineComponent;
