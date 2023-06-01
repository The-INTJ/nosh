"use client";

import React, { useState, FormEvent } from "react";
import { createUser } from "@lib/firebase-functions";
import styles from "@styles/pages/CreateAccount.module.scss";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CreateAccountPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = await createUser(email, password); // TODO: include username in your createUser function
  
    if (result.success) {
      router.replace("/account"); // Redirect to account page on successful account creation
    } else {
      setError(true); // Set error state to true if account creation fails
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Create Account</h1>
        <input
          type="text"
          className={styles.input}
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
          Create Account
        </button>
      </form>
      {error && <p className={styles.error}>There was an error creating your account. Please try again.</p>}
      <p>Already have an account?</p>
      <Link href="/account/login">
        Login here
      </Link>
    </div>
  );
};

export default CreateAccountPage;
