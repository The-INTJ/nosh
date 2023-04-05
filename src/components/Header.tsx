import React from "react";
import styles from "../styles/foundational/Header.module.scss";
import Link from "next/dist/client/link";
import OptionsAccordion from "./OptionsAccordion";

const Header = () => {
  return (
    <div className={styles.navBar}>
      <Link href="/">
        <div className={styles.h1ToolTip}>
          <h1 id={styles.obh}>Old Baptist Hymnals</h1>
        </div>
      </Link>
      <OptionsAccordion
        options={[
          ["/about", "About"],
          ["/account", "Account"],
        ]}
      />
    </div>
  );
};

export default Header;
