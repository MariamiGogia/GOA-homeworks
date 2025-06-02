import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const handleClick = () => {
    const name = prompt("Enter your name...");
    name
      ? alert(name)
      : alert("Enter your name!");
  };
  return (
    <button onClick={handleClick}>Enter your name here!</button>
  );
}

export default App
