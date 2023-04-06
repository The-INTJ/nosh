'use client'
import Link from "next/link";
import React, { useContext } from "react";
import AccountInfo from "../../components/AccountInfo";
import { UserContext } from "@lib/context";

const Account = () => {
  const { user, username } = useContext(UserContext);
  return (
    <div>
      <div>
        <h1>Account Information</h1>
        {username ? (
          <AccountInfo />
        ) : (
          <Link href="/account/login">
            <h3>Login</h3>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Account;
