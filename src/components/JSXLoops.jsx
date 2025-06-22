import React, { useState } from 'react';

// JSX Loops - Demonstrates looping in JSX using .map() and other array methods

const JSXLoops = () => {
  const [fruits, setFruits] = useState([
    { id: 1, name: 'Apple', color: 'red', price: 1.99 },
    { id: 2, name: 'Banana', color: 'yellow', price: 0.99 },
    { id: 3, name: 'Cherry', color: 'red', price: 3.99 },
    { id: 4, name: 'Orange', color: 'orange', price: 2.49 },
    { id: 5, name: 'Grape', color: 'purple', price: 4.99 }
  ]);

  const [showExpensive, setShowExpensive] = useState(false);

  // Add a new fruit
  const addFruit = () => {
    const newFruit = {
      id: fruits.length + 1,
      name: 'New Fruit',
      color: 'green',
      price: Math.floor(Math.random() * 5) + 1
    };
    setFruits([...fruits, newFruit]);
  };

  // Remove a fruit by id
  const removeFruit = (id) => {
    setFruits(fruits.filter(fruit => fruit.id !== id));
  };

  return (
    <div className="jsx-loops">
      <h2>Looping in JSX using .map()</h2>
      
      <div className="example">
        <h3>1. Basic .map() with Simple Array</h3>
        <div className="basic-list">
          {['React', 'JavaScript', 'JSX', 'Components'].map((item, index) => (
            <span key={index} className="list-item">
              {item}
            </span>
          ))}
        </div>
      </div>
      
      <div className="example">
        <h3>2. .map() with Objects Array</h3>
        <div className="fruits-list">
          {fruits.map((fruit) => (
            <div key={fruit.id} className="fruit-item">
              <h4>{fruit.name}</h4>
              <p>Color: {fruit.color}</p>
              <p>Price: ${fruit.price}</p>
              <button 
                onClick={() => removeFruit(fruit.id)}
                style={{ backgroundColor: 'red', color: 'white' }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <button onClick={addFruit} style={{ backgroundColor: 'green', color: 'white' }}>
          Add New Fruit
        </button>
      </div>
      
      <div className="example">
        <h3>3. Conditional Rendering with .map()</h3>
        <button onClick={() => setShowExpensive(!showExpensive)}>
          {showExpensive ? 'Show All Fruits' : 'Show Expensive Fruits Only'}
        </button>
        
        <div className="filtered-fruits">
          {fruits
            .filter(fruit => !showExpensive || fruit.price > 2)
            .map((fruit) => (
              <div 
                key={fruit.id} 
                className="fruit-card"
                style={{
                  border: fruit.price > 3 ? '2px solid gold' : '1px solid #ccc',
                  backgroundColor: fruit.price > 3 ? '#fff3cd' : '#f8f9fa'
                }}
              >
                <h4>{fruit.name}</h4>
                <p>Price: ${fruit.price}</p>
                {fruit.price > 3 && <span style={{ color: 'gold' }}>⭐ Premium</span>}
              </div>
            ))}
        </div>
      </div>
      
      <div className="example">
        <h3>4. .map() with Index and Conditional Styling</h3>
        <div className="numbered-list">
          {fruits.map((fruit, index) => (
            <div 
              key={fruit.id}
              className="numbered-item"
              style={{
                backgroundColor: index % 2 === 0 ? '#f8f9fa' : '#e9ecef',
                padding: '10px',
                margin: '5px 0',
                borderRadius: '5px'
              }}
            >
              <span style={{ fontWeight: 'bold' }}>{index + 1}.</span> {fruit.name} - ${fruit.price}
            </div>
          ))}
        </div>
      </div>
      
      <div className="example">
        <h3>5. Nested .map() - Categories</h3>
        <div className="categories">
          {(() => {
            const categories = {};
            fruits.forEach(fruit => {
              if (!categories[fruit.color]) {
                categories[fruit.color] = [];
              }
              categories[fruit.color].push(fruit);
            });
            
            return Object.entries(categories).map(([color, colorFruits]) => (
              <div key={color} className="category">
                <h4 style={{ color: color, textTransform: 'capitalize' }}>
                  {color} Fruits ({colorFruits.length})
                </h4>
                <div className="category-items">
                  {colorFruits.map(fruit => (
                    <span key={fruit.id} className="category-item">
                      {fruit.name}
                    </span>
                  ))}
                </div>
              </div>
            ));
          })()}
        </div>
      </div>
      
      <div className="example">
        <h3>6. .map() with Complex Calculations</h3>
        <div className="statistics">
          {(() => {
            const totalPrice = fruits.reduce((sum, fruit) => sum + fruit.price, 0);
            const averagePrice = totalPrice / fruits.length;
            const expensiveFruits = fruits.filter(fruit => fruit.price > averagePrice);
            const cheapFruits = fruits.filter(fruit => fruit.price <= averagePrice);
            
            return [
              { label: 'Total Price', value: `$${totalPrice.toFixed(2)}`, color: '#28a745' },
              { label: 'Average Price', value: `$${averagePrice.toFixed(2)}`, color: '#007bff' },
              { label: 'Expensive Fruits', value: expensiveFruits.length, color: '#dc3545' },
              { label: 'Cheap Fruits', value: cheapFruits.length, color: '#ffc107' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="stat-card"
                style={{
                  backgroundColor: stat.color,
                  color: 'white',
                  padding: '15px',
                  borderRadius: '8px',
                  margin: '5px',
                  textAlign: 'center'
                }}
              >
                <h4>{stat.label}</h4>
                <p style={{ fontSize: '1.5em', margin: 0 }}>{stat.value}</p>
              </div>
            ));
          })()}
        </div>
      </div>
      
      <div className="example">
        <h3>7. .map() with Event Handlers</h3>
        <div className="interactive-list">
          {fruits.map((fruit) => (
            <div 
              key={fruit.id}
              className="interactive-item"
              style={{
                border: '1px solid #ddd',
                padding: '10px',
                margin: '5px 0',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f0f0'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              onClick={() => alert(`You clicked on ${fruit.name}!`)}
            >
              <h4>{fruit.name}</h4>
              <p>Color: {fruit.color} | Price: ${fruit.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JSXLoops; 