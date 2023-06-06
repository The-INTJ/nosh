"use client";
import Link from "next/link";
import React, { useContext } from "react";
import AccountInfo from "../../components/AccountInfo";
import { UserContext } from "@lib/context";
import AccountAuth from "@/components/AccountAuth";

const Account = () => {
  const { user, username } = useContext(UserContext);
  console.log(user)
  return (
    <div>
      <div>
        {user ? (
          <div>
            <h1>Account Information</h1>
            <AccountInfo />
          </div>
        ) : (
          <AccountAuth />
        )}
      </div>
    </div>
  );
};

export default Account;
