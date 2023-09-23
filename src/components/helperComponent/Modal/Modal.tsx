import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import styles from "./Modal.module.css";

import manJumping from "../../../assets/images/successful-man.png";

import GradientButton from "../../UiComponents/GradientButton/GradientButton";

const backdropVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transistion: { type: "tween", ease: "easeInOut" } },
};

const modalVariant = {
  hidden: { opacity: 0, y: "-100vh" },
  visible: { opacity: 1, y: 200, transition: { type: "spring", delay: 0.3 } },
};

const Modal = () => {
  return (
    <AnimatePresence onExitComplete={() => console.log("exittt")}>
      <motion.div
        className={styles.backdrop}
        variants={backdropVariant}
        initial="hidden"
        animate="visible"
        exit="hidden"
        key="keyForThisDiv"
      >
        <motion.div variants={modalVariant} className={styles.modal}>
          <img src={manJumping} alt="success" className={styles.image_1} />
          <h1 className={styles.title}>
            Congratulations <br /> you have successfully Registered!
          </h1>
          <p className={styles.text}>
            {" "}
            Yes, it was easy and you did it! <br /> check your mail box for next
            step{" "}
          </p>
          <Link to="/">
            <GradientButton buttonText="Back" />
          </Link>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
