import { FC } from "react";

// imported styles
import styles from "./RootLayout.module.css";

// outlet from react-router-dom
import { Outlet } from "react-router-dom";

// imported components
import NavBar from "../../components/elementComponents/NavBar/NavBar";

const RootLayout: FC = () => {
  return (
    <div className={styles.pageContainer}>
      <NavBar />
      <main className={styles.outlet}>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
