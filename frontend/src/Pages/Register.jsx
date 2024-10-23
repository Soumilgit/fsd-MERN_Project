import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showToast, setShowToast] = useState(false); // For showing the toast

  const handleSignup = () => {
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

    // Store the email and password in localStorage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    
    // Show the toast notification
    setShowToast(true);

    // Hide the toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleAutoSave = () => {
    // Optionally ask the user if they want to save the credentials for autofill in the login form
    localStorage.setItem('autoSave', 'true');
    alert('Your data will be autofilled during login.');
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
          <option value="user">admin</option>
        </select>
        <button className="signup-button" onClick={handleSignup}>
          Register Now
        </button>
        <p>Already have an account? <a href="/login">Login now</a></p>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="toast">
          <p>Registration Successful!</p>
          <button className="auto-save-button" onClick={handleAutoSave}>
            Auto Save Credentials
          </button>
        </div>
      )}
    </div>
  );
}

export default Register;
