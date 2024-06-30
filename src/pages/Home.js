import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('student');
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const navigate = useNavigate();

  const handleLogin = () => {
   
    if (username && password) {
      setIsLoggedIn(true);
      navigate('/menu'); 
    }
  };

  const handleRegister = () => {
    
    if (username && password) {
  
      setIsRegistering(false);
      alert('Registration successful! Please log in.');
    }
  };

  if (isLoggedIn) {
    return (
      <div>
        <h2>You are already logged in!</h2>
        <button onClick={() => navigate('/menu')}>Go to Menu</button>
      </div>
    );
  }

  return (
    <div className="home-wrapper">
      <div className="home-container">
      <img src='data:image/jpeg;base64,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'alt="Classy Canteen Corner Logo" className="logo" />
        <h1>Welcome to Sahyadri Digital Canteen</h1>
        {!isRegistering ? (
          <div className="login-form">
            <h2>Login</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            <button onClick={() => setIsRegistering(true)}>Register</button>
          </div>
        ) : (
          <div className="register-form">
            <h2>Register</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <select value={userType} onChange={(e) => setUserType(e.target.value)}>
              <option value="student">Student</option>
              <option value="staff">Staff</option>
            </select>
            <button onClick={handleRegister}>Register</button>
            <button onClick={() => setIsRegistering(false)}>Back to Login</button>
          </div>
        )}
      </div>

      <div className="footer">
        &copy; 2024 Sahyadri Digital Canteen. All rights reserved.
        
      </div>
    </div>
  );
};

export default Home;
