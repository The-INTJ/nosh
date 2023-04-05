'use client'

import React, { useState, FormEvent } from 'react';
import { signIn } from '@lib/helpers';
import styles from '@styles/pages/Login.module.scss';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = await signIn(email, password);

    if (!result.success) {
      
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Login</h1>
        {error && <p className={styles.error}>{error}</p>}
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
    </div>
  );
};

export default LoginPage;
