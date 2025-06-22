import React, { useState } from 'react';
import JSXBasics from './JSXBasics';
import SimpleComponents from './SimpleComponents';
import JSXConditionals from './JSXConditionals';
import ImmediatelyInvokedJSX from './ImmediatelyInvokedJSX';
import JSXLoops from './JSXLoops';

// Main Tutorial App - Organizes all JSX concepts with navigation
const TutorialApp = () => {
  const [currentSection, setCurrentSection] = useState('basics');

  const sections = [
    { id: 'basics', name: 'JSX Basics', component: JSXBasics },
    { id: 'components', name: 'Simple Components', component: SimpleComponents },
    { id: 'conditionals', name: 'JSX Conditionals', component: JSXConditionals },
    { id: 'iife', name: 'Immediately Invoked JSX', component: ImmediatelyInvokedJSX },
    { id: 'loops', name: 'JSX Loops', component: JSXLoops }
  ];

  const CurrentComponent = sections.find(section => section.id === currentSection)?.component;

  return (
    <div className="tutorial-app">
      <header className="tutorial-header">
        <h1>React JSX Tutorial</h1>
        <p>Learn JSX syntax and React concepts step by step</p>
      </header>

      <nav className="tutorial-nav">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setCurrentSection(section.id)}
            className={`nav-button ${currentSection === section.id ? 'active' : ''}`}
          >
            {section.name}
          </button>
        ))}
      </nav>

      <main className="tutorial-content">
        <div className="section-info">
          <h2>{sections.find(section => section.id === currentSection)?.name}</h2>
          <div className="concept-description">
            {currentSection === 'basics' && (
              <p>Learn fundamental JSX syntax, variables, attributes, and expressions.</p>
            )}
            {currentSection === 'components' && (
              <p>Understand how to create and compose simple React components.</p>
            )}
            {currentSection === 'conditionals' && (
              <p>Master conditional rendering with ternary operators and logical AND.</p>
            )}
            {currentSection === 'iife' && (
              <p>Explore immediately invoked functions for complex JSX logic.</p>
            )}
            {currentSection === 'loops' && (
              <p>Learn to render lists and arrays using .map() and other array methods.</p>
            )}
          </div>
        </div>

        <div className="component-demo">
          {CurrentComponent && <CurrentComponent />}
        </div>
      </main>

      <footer className="tutorial-footer">
        <div className="navigation-help">
          <h3>Navigation Tips:</h3>
          <ul>
            <li>Click on the navigation buttons above to switch between concepts</li>
            <li>Each section demonstrates different JSX patterns and techniques</li>
            <li>Try interacting with the examples to see how they work</li>
            <li>Check the browser console for any additional information</li>
          </ul>
        </div>
        
        <div className="key-concepts">
          <h3>Key Concepts Covered:</h3>
          <div className="concepts-grid">
            <div className="concept">
              <strong>JSX Syntax:</strong> HTML-like syntax in JavaScript
            </div>
            <div className="concept">
              <strong>Components:</strong> Reusable UI building blocks
            </div>
            <div className="concept">
              <strong>Conditionals:</strong> Dynamic rendering based on conditions
            </div>
            <div className="concept">
              <strong>IIFE:</strong> Immediately invoked function expressions
            </div>
            <div className="concept">
              <strong>Loops:</strong> Rendering lists with .map()
            </div>
          </div>
        </div>

        {/* Social Profiles and Copyright */}
        <div className="social-profiles">
          <div className="social-links">
            <a 
              href="https://github.com/tausif1337" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <span className="social-icon">🐙</span>
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/tausif1337" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <span className="social-icon">💼</span>
              LinkedIn
            </a>
            <a 
              href="https://twitter.com/tausif1337" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <span className="social-icon">🐦</span>
              Twitter
            </a>
            <a 
              href="https://tausif1337.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <span className="social-icon">🌐</span>
              Portfolio
            </a>
          </div>
          
          <div className="copyright">
            © 2077 <a href="https://tausif1337.dev" target="_blank" rel="noopener noreferrer">@tausif1337</a>. 
            All rights reserved. Built with ❤️ and React.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TutorialApp; 