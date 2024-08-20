import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import './index.css'; // Import your styles

const Login = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle your login logic here
  };

  return (
    <div className="login-modal">
      <div className="login-header">
        <img src="popai-logo.png" alt="PopAI Logo" className="logo" />
        <h2>Your Personal AI Workspace</h2>
      </div>
      <p className="login-message">
        Log in to get the latest AI models and smarter responses
      </p>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={handleEmailChange}
          required
          className="email-input"
        />
        <button type="submit" className="next-button">Next</button>
      </form>
      <div className="or-separator">or</div>
      <button className="google-login-button">
        <FaGoogle className="google-icon" />
        Continue with Google
      </button>
      <div className="terms-and-privacy">
        By continuing, you are agreeing to our{' '}
        <a href="/terms">Terms of Service</a> &amp;{' '}
        <a href="/privacy">Privacy Policy</a>.
      </div>
    </div>
  );
};

export default Login;
