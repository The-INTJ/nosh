import { logout } from "@lib/firebase-functions";
import React, { useContext } from "react";
import { UserContext } from "@lib/context";
import styles from "../styles/components/AccountInfo.module.scss";
import HymnalPuchasedList from "@components/HymnalPurchasedList";
import { useRouter } from "next/navigation";

const AccountInfo = () => {
  const { user, username } = useContext(UserContext);
  const router = useRouter();
  const logoutWrapper = () => {
    logout();
    router.replace("/account/login");
  }
  return (
    <div className={styles.accountInfoContainer}>
      <h2>Hi {username}, here are the books and purchases.</h2>
      <HymnalPuchasedList user={user} />
      <button onClick={() => logoutWrapper()}>Log out</button>
    </div>
  );
};

export default AccountInfo;
