import React from 'react';

// JSX Basics Component - Demonstrates fundamental JSX syntax and conventions
const JSXBasics = () => {
  // JSX allows us to write HTML-like syntax in JavaScript
  // Note: We must return a single parent element (or use React.Fragment)
  
  const userName = "React Developer";
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="jsx-basics">
      <h2>JSX Syntax and Conventions</h2>
      
      {/* JSX Comments use this syntax */}
      
      {/* 1. Basic JSX with variables */}
      <div className="example">
        <h3>1. Variables in JSX</h3>
        <p>Hello, {userName}!</p>
        <p>Current year: {currentYear}</p>
      </div>
      
      {/* 2. JSX attributes use camelCase */}
      <div className="example">
        <h3>2. JSX Attributes (camelCase)</h3>
        <button className="btn" onClick={() => alert('Button clicked!')}>
          Click me
        </button>
        <input 
          type="text" 
          placeholder="Enter your name"
          style={{ marginLeft: '10px' }}
        />
      </div>
      
      {/* 3. JSX expressions can contain any valid JavaScript */}
      <div className="example">
        <h3>3. JavaScript Expressions in JSX</h3>
        <p>2 + 2 = {2 + 2}</p>
        <p>Random number: {Math.random()}</p>
        <p>Uppercase name: {userName.toUpperCase()}</p>
      </div>
      
      {/* 4. Conditional rendering with ternary operator */}
      <div className="example">
        <h3>4. Conditional Rendering</h3>
        {currentYear > 2025 ? (
          <p style={{ color: 'orange' }}>Still in the past...</p>
        ) : (
          <p style={{ color: 'green' }}>Welcome to the future! 🚀</p>
        )
        }
      </div>
    </div>
  );
};

export default JSXBasics; 