import React, { useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';
import './Login.css'; // Reuse the login CSS
import googlelogo from '../assets/images/google-logo.png';
import githublogo from '../assets/images/github-logo.png';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  const { user } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/'); // Redirect to home page after successful login
    } catch (error) {
      console.error('Google login error:', error);
      setError('Failed to sign in with Google');
    }
  };

  const handleGithubLogin = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/'); // Redirect to home page after successful login
    } catch (error) {
      console.error('GitHub login error:', error);
      setError('Failed to sign in with GitHub');
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirect to home page after successful login
    } catch (error) {
      setError('Failed to sign in with email and password');
      console.error('Email login error:', error);
    }
  };

  if (user) return <p>You are logged in as {user.email}</p>;

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      {error && <p className="error-message">{error}</p>}

      <form className="auth-form" onSubmit={handleEmailLogin}>
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

        <button type="submit" className="auth-btn">Sign In</button>
      </form>

      <div className="auth-alternatives">
        <p>or sign in with</p>
        <div className='auth-buttons'>
          <button className="auth-btn google-btn" onClick={handleGoogleLogin}>
            <img src={googlelogo} alt="Google Logo" /> Google
          </button>
          <button className="auth-btn github-btn" onClick={handleGithubLogin}>
            <img src={githublogo} alt="GitHub Logo" /> GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
