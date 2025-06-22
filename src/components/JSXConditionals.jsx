import React, { useState } from 'react';

// JSX Conditionals - Demonstrates different ways to handle conditional rendering

const JSXConditionals = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('user');
  const [showDetails, setShowDetails] = useState(true);
  const [score, setScore] = useState(85);

  return (
    <div className="jsx-conditionals">
      <h2>JSX Shorthand If-Else Patterns</h2>
      
      <div className="example">
        <h3>1. Ternary Operator (Most Common)</h3>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
        <p>
          Status: {isLoggedIn ? '🟢 Logged In' : '🔴 Logged Out'}
        </p>
      </div>
      
      <div className="example">
        <h3>2. Logical AND (&&) - For Simple Conditions</h3>
        {isLoggedIn && (
          <div className="welcome-message">
            <p>Welcome back! You are logged in.</p>
            <button onClick={() => setUserRole(userRole === 'admin' ? 'user' : 'admin')}>
              Toggle Role
            </button>
          </div>
        )}
        
        {userRole === 'admin' && (
          <div className="admin-panel">
            <h4>🔧 Admin Panel</h4>
            <p>You have admin privileges</p>
          </div>
        )}
      </div>
      
      <div className="example">
        <h3>3. Multiple Conditions with Ternary</h3>
        <div className="score-display">
          <p>Your score: {score}</p>
          <p>
            Grade: {
              score >= 90 ? 'A' :
              score >= 80 ? 'B' :
              score >= 70 ? 'C' :
              score >= 60 ? 'D' : 'F'
            }
          </p>
          <p>
            {score >= 90 ? '🎉 Excellent!' :
             score >= 80 ? '👍 Good job!' :
             score >= 70 ? '✅ Passable' :
             score >= 60 ? '⚠️ Needs improvement' : '❌ Failed'}
          </p>
        </div>
        <button onClick={() => setScore(Math.floor(Math.random() * 100))}>
          Generate Random Score
        </button>
      </div>
      
      <div className="example">
        <h3>4. Conditional Rendering with Functions</h3>
        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? 'Hide' : 'Show'} Details
        </button>
        
        {showDetails && (
          <div className="details">
            <h4>Detailed Information</h4>
            <p>This content is conditionally rendered based on the showDetails state.</p>
            <p>Current user role: <strong>{userRole}</strong></p>
            <p>Login status: <strong>{isLoggedIn ? 'Yes' : 'No'}</strong></p>
          </div>
        )}
      </div>
      
      <div className="example">
        <h3>5. Conditional Styling</h3>
        <div 
          className="status-indicator"
          style={{
            padding: '10px',
            borderRadius: '5px',
            backgroundColor: isLoggedIn ? '#d4edda' : '#f8d7da',
            color: isLoggedIn ? '#155724' : '#721c24',
            border: `1px solid ${isLoggedIn ? '#c3e6cb' : '#f5c6cb'}`
          }}
        >
          {isLoggedIn ? '🟢 Active Session' : '🔴 No Active Session'}
        </div>
      </div>
      
      <div className="example">
        <h3>6. Conditional Class Names</h3>
        <div className={`user-status ${isLoggedIn ? 'online' : 'offline'}`}>
          <span className={`status-dot ${isLoggedIn ? 'green' : 'red'}`}></span>
          {isLoggedIn ? 'Online' : 'Offline'}
        </div>
      </div>
    </div>
  );
};

export default JSXConditionals; 