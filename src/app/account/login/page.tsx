"use client";

import React, { useState, FormEvent } from "react";
import { signIn } from "@lib/firebase-functions";
import styles from "@styles/pages/Login.module.scss";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import Link from "next/link";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent, email: string, password: string, router: AppRouterInstance) => {
    e.preventDefault();
    const result = await signIn(email, password);
  
    if (result.success) {
      router.replace("/account");
    } else {
      setError(true)
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e, email, password, router)}>
        <h1 className={styles.title}>Login</h1>
        <input
          type="email"
          className={styles.input}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className={styles.input}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.submitButton} type="submit">
          Login
        </button>
      </form>
      {error && <p className={styles.error}>Invalid email or password</p>}
      <p>Don't have an account?</p>
      <Link href="/account/create"><b>Create One</b></Link>
    </div>
  );
};

export default LoginPage;
