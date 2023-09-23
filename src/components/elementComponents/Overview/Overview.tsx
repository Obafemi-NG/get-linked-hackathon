import { FC } from "react";

import styles from "./Overview.module.css";

import overviewImage1 from "../../../assets/images/hackathon_details_image_1.png";
import overviewImage2 from "../../../assets/images/hackathon_details_image_2.png";
import overviewImage3 from "../../../assets/images/hackathon_details_image_3.png";

// import { motion } from "framer-motion";
import LeftRevealSpringy from "../../helperComponent/LeftRevealSpringy";
import RightReveal from "../../helperComponent/RightReveal";
import LeftReveal from "../../helperComponent/LeftReveal";
import RightRevealSpringy from "../../helperComponent/RightRevealSpringy";
import GradientButton from "../../UiComponents/GradientButton/GradientButton";

import purpleFlare from "../../../assets/images/purple_flare.png";

const Overview: FC = () => {
  return (
    <section className={styles.overviewContainer} id="overview">
      <div className={styles.overviewContent}>
        <div className={styles.overview}>
          <LeftRevealSpringy>
            <img
              src={overviewImage1}
              alt="first_overview_image"
              className={styles.overviewImage}
            />
          </LeftRevealSpringy>
          <div className={styles.descContainer}>
            <RightReveal>
              <>
                <p className={styles.title}>
                  Introduction to getlinked <br />
                  <span className={styles.colouredText}>
                    {" "}
                    tech Hackathon 1.0
                  </span>
                </p>
                <p className={styles.description}>
                  Our tech hackathon is a melting pot of visionaries, and its
                  purpose is as clear as day: to shape the future. Whether
                  you're a coding genius, a design maverick, or a concept
                  wizard, you'll have the chance to transform your ideas into
                  reality. Solving real-world problems, pushing the boundaries
                  of technology, and creating solutions that can change the
                  world, that's what we're all about!
                </p>
              </>
            </RightReveal>
          </div>
        </div>
        <div className={` ${styles.reversedOverview} `}>
          <img
            src={purpleFlare}
            alt="purple_flare"
            className={styles.purpleFlare}
          />
          <img
            src={purpleFlare}
            alt="purple_flare"
            className={styles.purpleFlare2}
          />
          <div className={styles.reversedDescContainer}>
            <LeftReveal>
              <>
                <p className={styles.reversedTitle}>
                  Rules and <br />
                  <span className={styles.colouredText}> Guidelines </span>
                </p>
                <p className={styles.description}>
                  Our tech hackathon is a melting pot of visionaries, and its
                  purpose is as clear as day: to shape the future. Whether
                  you're a coding genius, a design maverick, or a concept
                  wizard, you'll have the chance to transform your ideas into
                  reality. Solving real-world problems, pushing the boundaries
                  of technology, and creating solutions that can change the
                  world, that's what we're all about!
                </p>
              </>
            </LeftReveal>
          </div>
          <RightRevealSpringy>
            <img
              src={overviewImage2}
              alt="second_overview_image"
              className={styles.reversedOverviewImage}
            />
          </RightRevealSpringy>
        </div>
        <div className={styles.judgingOverview}>
          <LeftRevealSpringy>
            <img
              src={overviewImage3}
              alt="first_overview_image"
              className={styles.overviewImage}
            />
          </LeftRevealSpringy>
          <div className={styles.descContainer}>
            <RightReveal>
              <>
                <p className={styles.title}>
                  Judging Criteria <br />
                  <span className={styles.colouredText}> Key attributes</span>
                </p>
                <ul className={styles.descriptionList}>
                  <li className={styles.descriptionText}>
                    {" "}
                    <span className={styles.colouredText}>
                      Innovation and Creativity:
                    </span>{" "}
                    Evaluate the uniqueness and creativity of the solution.
                    Consider whether it addresses a real-world problem in a
                    novel way or introduces innovative features.
                  </li>
                  <li className={styles.descriptionText}>
                    {" "}
                    <span className={styles.colouredText}>
                      Functionality:
                    </span>{" "}
                    Assess how well the solution works. Does it perform its
                    intended functions effectively and without major issues?
                    Judges would consider the completeness and robustness of the
                    solution.
                  </li>
                  <li className={styles.descriptionText}>
                    {" "}
                    <span className={styles.colouredText}>
                      Impact and Relevance:
                    </span>{" "}
                    Determine the potential impact of the solution in the real
                    world. Does it address a significant problem, and is it
                    relevant to the target audience? Judges would assess the
                    potential social, economic, or environmental benefits.
                  </li>
                  <li className={styles.descriptionText}>
                    {" "}
                    <span className={styles.colouredText}>
                      Technical Complexity:
                    </span>{" "}
                    Evaluate the technical sophistication of the solution.
                    Judges would consider the complexity of the code, the use of
                    advanced technologies or algorithms, and the scalability of
                    the solution.
                  </li>
                  <li className={styles.descriptionText}>
                    {" "}
                    <span className={styles.colouredText}>
                      Adherence to Hackathon Rules:
                    </span>{" "}
                    Judges will Ensure that the team adhered to the rules and
                    guidelines of the hackathon, including deadlines, use of
                    specific technologies or APIs, and any other
                    competition-specific requirements.
                  </li>
                </ul>
                <div className={styles.btnContainer}>
                  <GradientButton buttonText="Read More" />
                </div>
              </>
            </RightReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
