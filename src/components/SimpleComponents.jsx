import React from 'react';

// Simple Components - Demonstrates component creation and composition

// 1. Simple functional component
const Greeting = ({ name, age }) => {
  return (
    <div className="greeting">
      <h3>Hello, {name}!</h3>
      <p>You are {age} years old.</p>
    </div>
  );
};

// 2. Component with default props
const UserCard = ({ name = "Anonymous", role = "User", avatar = "👤" }) => {
  return (
    <div className="user-card">
      <div className="avatar">{avatar}</div>
      <h4>{name}</h4>
      <p className="role">{role}</p>
    </div>
  );
};

// 3. Component that renders other components
const SimpleComponents = () => {
  const users = [
    { name: "Alice", age: 25, role: "Developer", avatar: "👩‍💻" },
    { name: "Bob", age: 30, role: "Designer", avatar: "👨‍🎨" },
    { name: "Charlie", age: 28, role: "Manager", avatar: "👨‍💼" }
  ];

  return (
    <div className="simple-components">
      <h2>Simple Component Creation</h2>
      
      <div className="example">
        <h3>1. Basic Component with Props</h3>
        <Greeting name="John" age={25} />
        <Greeting name="Sarah" age={30} />
      </div>
      
      <div className="example">
        <h3>2. Component with Default Props</h3>
        <div className="user-cards">
          <UserCard name="Alice" role="Developer" avatar="👩‍💻" />
          <UserCard name="Bob" role="Designer" avatar="👨‍🎨" />
          <UserCard /> {/* Uses default props */}
        </div>
      </div>
      
      <div className="example">
        <h3>3. Component Composition</h3>
        <p>This component renders multiple other components:</p>
        <div className="greetings-section">
          {users.map((user, index) => (
            <div key={index} className="user-section">
              <Greeting name={user.name} age={user.age} />
              <UserCard 
                name={user.name} 
                role={user.role} 
                avatar={user.avatar} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimpleComponents; 