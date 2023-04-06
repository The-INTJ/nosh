import { logout } from "@lib/helpers";
import React, { useContext } from "react";
import { UserContext } from "@lib/context";
import styles from "../styles/components/AccountInfo.module.scss";


const AccountInfo = () => {
  const { user, username } = useContext(UserContext)
  return (
    <div className={styles.accountInfoContainer}>
      <h2>Hi {username}, purchase info will eventually be added to this section.</h2>
      <button onClick={() => logout()}>Log out</button>
    </div>
  );
};

export default AccountInfo;
