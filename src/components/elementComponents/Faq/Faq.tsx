import { FC, useState } from "react";

import styles from "./Faq.module.css";

// imported fontawesomeicons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import { faqData } from "../../../constants/constants";

import faqImage from "../../../assets/images/faq_-image.png";
import LeftReveal from "../../helperComponent/LeftReveal";
import RightRevealSpringy from "../../helperComponent/RightRevealSpringy";

const Faq: FC = () => {
  const [showAnswer, setShowAnswer] = useState<{ [id: string]: boolean }>({});
  const toggleAnswer = (id: string) => {
    setShowAnswer({
      [id]: !showAnswer[id],
    });
  };
  return (
    // <>
    <section className={styles.faqSectionContainer} id="faq">
      <div className={styles.faqSectionContent}>
        <div className={styles.leftSide}>
          <LeftReveal>
            <>
              <p className={styles.title}>
                {" "}
                Frequently Asked <br />
                <span className={styles.colouredText}> Question </span>{" "}
              </p>
              <p className={styles.subTitle}>
                {" "}
                We got answers to the questions that you might want to ask about
                <span className={styles.boldText}>
                  {" "}
                  getlinked Hackathon 1.0{" "}
                </span>{" "}
              </p>
              {faqData.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={styles["faq-container"]}
                    onClick={() => toggleAnswer(item.id)}
                  >
                    <div className={styles["question-top"]}>
                      <p className={styles["question"]}>{item.question}</p>
                      {showAnswer[item.id] ? (
                        <FontAwesomeIcon
                          icon={faMinus}
                          style={{ color: "#D434FE" }}
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faPlus}
                          style={{ color: "#D434FE" }}
                        />
                      )}
                    </div>
                    <p className={styles.answer}>
                      {" "}
                      {showAnswer[item.id] && item.answer}{" "}
                    </p>
                  </div>
                );
              })}
            </>
          </LeftReveal>
        </div>
        <div className={styles.rightSide}>
          <RightRevealSpringy>
            <img src={faqImage} alt="faq_image" className={styles.faqImage} />
          </RightRevealSpringy>
        </div>
      </div>
    </section>
  );
};

export default Faq;
