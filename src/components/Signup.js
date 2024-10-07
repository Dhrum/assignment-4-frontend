import React, { useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase';
import './Login.css'; // Reuse the login CSS
import googlelogo from '../assets/images/google-logo.png';
import githublogo from '../assets/images/github-logo.png';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const { user } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleGoogleSignup = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/welcome'); // Redirect to welcome page after successful signup
    } catch (error) {
      console.error('Google signup error:', error);
      setError('Failed to sign up with Google');
    }
  };

  const handleGithubSignup = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/welcome'); // Redirect to welcome page after successful signup
    } catch (error) {
      console.error('GitHub signup error:', error);
      setError('Failed to sign up with GitHub');
    }
  };

  const handleEmailSignup = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError('Password should be at least 6 characters');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/welcome'); // Redirect to welcome page after successful signup
    } catch (error) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          setError('This email is already in use. Please try logging in.');
          break;
        case 'auth/invalid-email':
          setError('Please enter a valid email address.');
          break;
        case 'auth/weak-password':
          setError('Password should be at least 6 characters.');
          break;
        default:
          setError('Failed to sign up with email and password. Please try again later.');
      }
      console.error('Email signup error:', error);
    }
  };

  if (user) return <p>You are logged in as {user.displayName || user.email}</p>;

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      {error && <p className="error-message">{error}</p>}

      <form className="auth-form" onSubmit={handleEmailSignup}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />

        <button type="submit" className="auth-btn">Sign Up</button>
      </form>

      <div className="auth-alternatives">
        <p>or sign in with</p>
        <div className='auth-buttons'>
          <button className="auth-btn google-btn" onClick={handleGoogleSignup}>
            <img src={googlelogo} alt="Google Logo" /> Google
          </button>
          <button className="auth-btn github-btn" onClick={handleGithubSignup}>
            <img src={githublogo} alt="GitHub Logo" /> GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
