import { FC, useState } from "react";
import Logo from "../../UiComponents/Logo/Logo";

import styles from "./NavBar.module.css";
import { hashlinks } from "../../../constants/constants";
import GradientButton from "../../UiComponents/GradientButton/GradientButton";
import { NavLink, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import close from "../../../assets/icons/close.svg";

const containerVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
    },
  },
  exit: { x: "-100vw", transition: { ease: "easeInOut" } },
};

const NavBar: FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/register");
  };
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.navbarContainer}>
      <div className={styles.navbarContent}>
        <Logo />
        <div className={styles.links}>
          <ul className={styles.navlinks}>
            {hashlinks.map((data) => (
              <li key={data.id} className={styles.linkContainer}>
                <p
                  onClick={() => scrollToSection(data.url)}
                  className={styles.linkText}
                >
                  {data.title}
                </p>
              </li>
            ))}
            <li>
              <NavLink
                to="contact-us"
                className={({ isActive }) =>
                  isActive ? `${styles.activeLink}` : `${styles.link}`
                }
              >
                <p className={styles.linkText}> Contact </p>{" "}
              </NavLink>{" "}
            </li>
          </ul>
          <div>
            <GradientButton
              onClickFunction={handleRegister}
              buttonText="Register"
            />
          </div>
        </div>
        <div
          className={styles.hamburgerContainer}
          onClick={() => setShowMenu(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="14"
            viewBox="0 0 19 14"
            fill="none"
          >
            <path
              d="M1.35714 0H8.14286C8.50279 0 8.84799 0.1475 9.1025 0.410051C9.35701 0.672601 9.5 1.0287 9.5 1.4C9.5 1.7713 9.35701 2.1274 9.1025 2.38995C8.84799 2.6525 8.50279 2.8 8.14286 2.8H1.35714C0.997206 2.8 0.652012 2.6525 0.397498 2.38995C0.142984 2.1274 0 1.7713 0 1.4C0 1.0287 0.142984 0.672601 0.397498 0.410051C0.652012 0.1475 0.997206 0 1.35714 0ZM10.8571 11.2H17.6429C18.0028 11.2 18.348 11.3475 18.6025 11.6101C18.857 11.8726 19 12.2287 19 12.6C19 12.9713 18.857 13.3274 18.6025 13.5899C18.348 13.8525 18.0028 14 17.6429 14H10.8571C10.4972 14 10.152 13.8525 9.8975 13.5899C9.64298 13.3274 9.5 12.9713 9.5 12.6C9.5 12.2287 9.64298 11.8726 9.8975 11.6101C10.152 11.3475 10.4972 11.2 10.8571 11.2ZM1.35714 5.6H17.6429C18.0028 5.6 18.348 5.7475 18.6025 6.01005C18.857 6.2726 19 6.6287 19 7C19 7.3713 18.857 7.7274 18.6025 7.98995C18.348 8.2525 18.0028 8.4 17.6429 8.4H1.35714C0.997206 8.4 0.652012 8.2525 0.397498 7.98995C0.142984 7.7274 0 7.3713 0 7C0 6.6287 0.142984 6.2726 0.397498 6.01005C0.652012 5.7475 0.997206 5.6 1.35714 5.6Z"
              fill="white"
            />
          </svg>
        </div>
        {showMenu && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={styles.mobileLinks}
          >
            <div className={styles.closeBtnContainer}>
              <img
                src={close}
                alt="close"
                className={styles.closeBtn}
                onClick={() => setShowMenu(false)}
              />
            </div>
            <ul className={styles.navlinks}>
              {hashlinks.map((data) => (
                <li key={data.id} className={styles.linkContainer}>
                  <p
                    onClick={() => scrollToSection(data.url)}
                    className={styles.linkText}
                  >
                    {data.title}
                  </p>
                </li>
              ))}
              <li>
                <NavLink
                  to="contact-us"
                  className={({ isActive }) =>
                    isActive ? `${styles.activeLink}` : `${styles.link}`
                  }
                >
                  <p className={styles.linkText}> Contact </p>{" "}
                </NavLink>{" "}
              </li>
            </ul>
            <div className={styles.btnContainer}>
              <GradientButton
                onClickFunction={handleRegister}
                buttonText="Register"
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default NavBar;
