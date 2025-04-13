import React, { useState } from 'react';

export default function ToggleDarkMode() {

  const [ darkMode, setDarkMode ] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const containerStyle = {
    backgroundColor: darkMode ? '#333' : '#fff' ,
    color: darkMode ? '#fff' : '#333', 
    padding: '20px',
    transition: 'all 0.3s ease',
  };

  return(
    <div style= {containerStyle}>
      <h2>Toggle Dark Mode App</h2>
      <p>The Current Theme is { darkMode ? 'Dark' : 'Light'}. </p>
      <button onClick= {toggleDarkMode}>
        Toggle to { darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}