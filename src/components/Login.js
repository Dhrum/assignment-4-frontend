// src/components/Login.js
import React, { useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';

const Login = () => {
  const { loginWithGoogle, user } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Google login error:', error);
    }
  };

  const handleGithubLogin = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('GitHub login error:', error);
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError('Failed to sign in with email and password');
      console.error('Email login error:', error);
    }
  };

  if (user) return <p>You are logged in as {user.email}</p>;

  return (
    <div className="container">
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleEmailLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
        <button type="submit">Login with Email</button>
      </form>

      <div className="auth-buttons">
        <button onClick={handleGoogleLogin}>Login with Google</button>
        <button onClick={handleGithubLogin}>Login with GitHub</button>
      </div>
    </div>
  );
};

export default Login;
