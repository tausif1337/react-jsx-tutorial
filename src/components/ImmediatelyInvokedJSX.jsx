import React, { useState } from 'react';

// Immediately Invoked JSX Functions - Demonstrates inline JSX execution

const ImmediatelyInvokedJSX = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');

  return (
    <div className="immediately-invoked-jsx">
      <h2>Immediately Invoked JSX Functions</h2>
      
      <div className="example">
        <h3>1. Simple Immediately Invoked Function</h3>
        <p>
          Current time: {
            (() => {
              const now = new Date();
              return now.toLocaleTimeString();
            })()
          }
        </p>
      </div>
      
      <div className="example">
        <h3>2. Conditional Logic in Immediately Invoked Function</h3>
        <p>
          Status: {
            (() => {
              if (count > 10) return 'High Count! 🎉';
              if (count > 5) return 'Medium Count 👍';
              if (count > 0) return 'Low Count 📈';
              return 'Zero Count 📉';
            })()
          }
        </p>
        <button onClick={() => setCount(count + 1)}>
          Increment Count (Current: {count})
        </button>
      </div>
      
      <div className="example">
        <h3>3. Complex Calculations in Immediately Invoked Function</h3>
        <div>
          {(() => {
            const numbers = [1, 2, 3, 4, 5];
            const sum = numbers.reduce((acc, num) => acc + num, 0);
            const average = sum / numbers.length;
            const max = Math.max(...numbers);
            const min = Math.min(...numbers);
            
            return (
              <div className="calculations">
                <p>Numbers: {numbers.join(', ')}</p>
                <p>Sum: {sum}</p>
                <p>Average: {average}</p>
                <p>Max: {max}</p>
                <p>Min: {min}</p>
              </div>
            );
          })()}
        </div>
      </div>
      
      <div className="example">
        <h3>4. Dynamic Content Generation</h3>
        <div>
          {(() => {
            const items = ['Apple', 'Banana', 'Cherry', 'Date'];
            const randomItem = items[Math.floor(Math.random() * items.length)];
            const itemLength = randomItem.length;
            
            return (
              <div className="dynamic-content">
                <p>Random fruit: <strong>{randomItem}</strong></p>
                <p>Letters in fruit: {itemLength}</p>
                <p>
                  {itemLength > 4 ? 'That\'s a long fruit name!' : 'That\'s a short fruit name!'}
                </p>
              </div>
            );
          })()}
        </div>
      </div>
      
      <div className="example">
        <h3>5. Theme-based Styling with Immediately Invoked Function</h3>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme (Current: {theme})
        </button>
        
        <div
          style={(() => {
            const baseStyles = {
              padding: '15px',
              borderRadius: '8px',
              margin: '10px 0',
              transition: 'all 0.3s ease'
            };
            
            if (theme === 'dark') {
              return {
                ...baseStyles,
                backgroundColor: '#333',
                color: '#fff',
                border: '1px solid #555'
              };
            } else {
              return {
                ...baseStyles,
                backgroundColor: '#f8f9fa',
                color: '#333',
                border: '1px solid #dee2e6'
              };
            }
          })()}
        >
          <p>This content adapts to the current theme!</p>
          <p>Theme: <strong>{theme}</strong></p>
        </div>
      </div>
      
      <div className="example">
        <h3>6. Error Handling in Immediately Invoked Function</h3>
        <div>
          {(() => {
            try {
              // Simulate some operation that might fail
              const result = count / 0;
              if (!isFinite(result)) {
                throw new Error('Division by zero!');
              }
              return <p>Result: {result}</p>;
            } catch (error) {
              return (
                <div style={{ color: 'red' }}>
                  <p>Error: {error.message}</p>
                  <p>Please try a different count value.</p>
                </div>
              );
            }
          })()}
        </div>
      </div>
      
      <div className="example">
        <h3>7. Multiple Operations in One Immediately Invoked Function</h3>
        <div>
          {(() => {
            // Multiple operations
            const timestamp = Date.now();
            const date = new Date(timestamp);
            const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
            const timeString = date.toLocaleTimeString();
            const isWeekend = ['Saturday', 'Sunday'].includes(dayOfWeek);
            
            return (
              <div className="timestamp-info">
                <p>Current timestamp: {timestamp}</p>
                <p>Day of week: {dayOfWeek}</p>
                <p>Time: {timeString}</p>
                <p>Is weekend: {isWeekend ? 'Yes! 🎉' : 'No 😔'}</p>
                {isWeekend && <p style={{ color: 'green' }}>Enjoy your weekend!</p>}
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
};

export default ImmediatelyInvokedJSX; 