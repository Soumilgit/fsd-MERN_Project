import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Directly post the login request without any checks
    axios.post('/login', { email, password });

    // No validation or error handling, just store the token and redirect
    localStorage.setItem('authToken', 'dummyToken');
    window.location.href = '/dashboard';
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>LOGIN NOW</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" onClick={handleLogin}>
          Login Now
        </button>
        <p>Don't have an account? <a href="#">Register now</a></p>
      </div>
    </div>
  );
}

export default Login;
