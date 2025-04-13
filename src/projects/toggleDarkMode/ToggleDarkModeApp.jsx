import React, { useState } from 'react';
import './ToggleDarkModeApp.css';

export default function ToggleDarkMode() {

  const [ darkMode, setDarkMode ] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

   return(
    <div className={`toggle-container ${darkMode ? 'dark' : 'light'}`}>
      <h2>Toggle Dark Mode App</h2>
      <p>The Current Theme is { darkMode ? 'Dark' : 'Light'}. </p>
      <button onClick= {toggleDarkMode}>
        Toggle to { darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}
