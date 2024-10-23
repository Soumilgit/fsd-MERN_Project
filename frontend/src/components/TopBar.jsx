import React from 'react';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-container">
        
        <img src="logo1.png"></img>
        <div className="topbar-links">
          
          <a href="/login">Login</a>
          <h> | </h>
          <a href="/register">Register</a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
