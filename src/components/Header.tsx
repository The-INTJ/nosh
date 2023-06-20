import React from "react";
import styles from "../styles/foundational/Header.module.scss";
import Link from "next/dist/client/link";
import OptionsAccordion from "./OptionsAccordion";

const Header = () => {
  return (
    <div className={styles.navBar}>
      <Link href="/">
        <div className={styles.h1ToolTip}>
          <p id={styles.obh}>Old Baptist Hymnals</p>
        </div>
      </Link>
      <OptionsAccordion
        options={[
          ["/about", "About"],
          ["/account", "Account"],
          ["/chat", "Chat"]
        ]}
      />
    </div>
  );
};

export default Header;
