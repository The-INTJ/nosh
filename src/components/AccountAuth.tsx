import Link from "next/link";
import React from "react";

const AccountAuth = () => {
  return (
    <div>
      <h1>
      <Link href="/account/login">
        login
      </Link>
      </h1>
      <p>Don't have an account?</p>
      <Link href="/account/create">
        Create one
      </Link>
    </div>
  );
};

export default AccountAuth;