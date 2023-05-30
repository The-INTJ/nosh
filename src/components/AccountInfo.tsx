import { logout } from "@lib/helpers";
import React, { useContext } from "react";
import { UserContext } from "@lib/context";
import styles from "../styles/components/AccountInfo.module.scss";
import HymnalPuchasedList from "@components/HymnalPurchasedList";

const AccountInfo = () => {
  const { user, username } = useContext(UserContext)
  return (
    <div className={styles.accountInfoContainer}>
      <h2>Hi {username}, here are the books and purchases.</h2>
      <HymnalPuchasedList user={user} />
      <button onClick={() => logout()}>Log out</button>
    </div>
  );
};

export default AccountInfo;
