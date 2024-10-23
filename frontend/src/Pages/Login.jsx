import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  // Retrieve stored email and password from localStorage, if available
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [password, setPassword] = useState(localStorage.getItem('password') || '');
  const navigate = useNavigate();

  // Whenever the email or password changes, update localStorage
  useEffect(() => {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  }, [email, password]);

  const handleLogin = () => {
    // Dummy login logic: No error handling or request handling
    localStorage.setItem('authToken', 'dummyToken');

    // Redirect to the Home page after clicking the login button
    navigate('/home');
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
        <p>Don't have an account? <a href="/register">Register now</a></p>
      </div>
    </div>
  );
}

export default Login;
