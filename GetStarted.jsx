import React from 'react';

const GetStarted = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome to the React Getting Started Page!</h1>
      <p style={styles.paragraph}>
        React is a JavaScript library for building user interfaces. It allows you to create 
        reusable UI components that manage their own state. React makes it easy to build 
        complex UIs from small, isolated pieces of code called "components."
      </p>
      <h2 style={styles.subHeader}>Why Use React?</h2>
      <ul style={styles.list}>
        <li>Declarative: React makes it easy to create interactive UIs.</li>
        <li>Component-Based: Build encapsulated components that manage their own state.</li>
        <li>Learn Once, Write Anywhere: You can use React for web, mobile, and even desktop applications.</li>
      </ul>
      <h2 style={styles.subHeader}>Getting Started with React</h2>
      <p style={styles.paragraph}>
        To get started with React, you can follow these steps:
      </p>
      <ol style={styles.list}>
        <li>
          <strong>Install Node.js:</strong> Make sure you have Node.js installed on your machine.
          You can download it from <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">nodejs.org</a>.
        </li>
        <li>
          <strong>Set Up a React App:</strong> Use Create React App to set up a new React project quickly. 
          Run the following command in your terminal:
          <pre style={styles.code}>
            npx create-react-app my-app
          </pre>
        </li>
        <li>
          <strong>Navigate to Your App:</strong> Change to your app's directory:
          <pre style={styles.code}>
            cd my-app
          </pre>
        </li>
        <li>
          <strong>Start the Development Server:</strong> Run the following command to start your app:
          <pre style={styles.code}>
            npm start
          </pre>
        </li>
      </ol>
      <h2 style={styles.subHeader}>Learn More</h2>
      <p style={styles.paragraph}>
        Check out the official React documentation for more information:
        <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer"> React Documentation</a>
      </p>
    </div>
  );
};

// Styles for the component
const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  header: {
    textAlign: 'center',
    color: '#333',
  },
  subHeader: {
    marginTop: '20px',
    color: '#555',
  },
  paragraph: {
    lineHeight: '1.6',
    color: '#666',
  },
  list: {
    marginLeft: '20px',
    color: '#666',
  },
  code: {
    backgroundColor: '#f4f4f4',
    padding: '5px',
    borderRadius: '3px',
    display: 'block',
    margin: '10px 0',
  },
};

export default GetStarted;