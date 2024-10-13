import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(''); // To store error messages

  const handleSignup = () => {
    // Reset error before submission
    setError('');

    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    
    // Add Axios POST request here to send registration data to backend
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>REGISTER NOW</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <input
          type="password"
          placeholder="Enter confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <select className="user-select">
          <option value="user">user</option>
        </select>
        <button className="signup-button" onClick={handleSignup}>
          Register Now
        </button>
        <p>Already have an account? <a href="#">Login now</a></p>
      </div>
    </div>
  );
}

export default Register;
