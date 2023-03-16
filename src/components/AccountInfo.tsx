import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { UserContext } from "@lib/context";
import { auth } from "@lib/firebase";
import styles from "../styles/components/AccountInfo.module.scss";

const logOut = async () => {
  signOut(auth);
};

const AccountInfo = () => {
  const { user, username } = useContext(UserContext)
  return (
    <div className={styles.accountInfoContainer}>
      <h2>Hi {username}, purchase info will eventually be added to this section.</h2>
      <button onClick={logOut}>Log out</button>
    </div>
  );
};

export default AccountInfo;
