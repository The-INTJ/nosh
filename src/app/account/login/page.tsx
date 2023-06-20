"use client";

import React, { useState, FormEvent } from "react";
import { signIn } from "@lib/firebase-functions";
import styles from "@styles/pages/Login.module.scss";
import { useRouter, useSearchParams } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import Link from "next/link";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: FormEvent, email: string, password: string, router: AppRouterInstance) => {
    e.preventDefault();
    const result = await signIn(email, password);

    if (result.success) {
      console.log("Success")
      const redirectUrl = searchParams.get("redirect");
      if (redirectUrl) {
        router.push(redirectUrl);
      } else {
        router.push("/account");
      }
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
        <div className={styles.inputShowPassword}>
          <input
            type={showPassword ? "text" : "password"}
            className={styles.input}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className={styles.togglePassword}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <button className={styles.submitButton} type="submit">
          Login
        </button>
      </form>
      {error && <p className={styles.error}>Invalid email or password</p>}
      <p>No account?</p>
      <Link href="/account/create"><b>Create One</b></Link>
    </div>
  );
};

export default LoginPage;
