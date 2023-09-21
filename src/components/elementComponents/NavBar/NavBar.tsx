import { FC } from "react";
import Logo from "../../UiComponents/Logo/Logo";

// import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.css";
import { navlinks } from "../../../constants/constants";
import GradientButton from "../../UiComponents/GradientButton/GradientButton";

const NavBar: FC = () => {
  const handleRegister = () => {};
  return (
    <section className={styles.navbarContainer}>
      <div className={styles.navbarContent}>
        <Logo />
        <div className={styles.links}>
          <ul className={styles.navlinks}>
            {navlinks.map((data) => (
              <li key={data.id} className={styles.linkContainer}>
                {" "}
                {/* <NavLink
              to={data.title}
              className={({ isActive }) =>
                isActive ? `${styles.activeLink}` : `${styles.link}`
              }
              end
            > */}
                <p className={styles.linkText}> {data.title} </p>{" "}
                {/* </NavLink>{" "} */}
              </li>
            ))}
          </ul>
          <GradientButton
            onClickFunction={handleRegister}
            buttonText="Register"
          />
        </div>
      </div>
    </section>
  );
};

export default NavBar;
