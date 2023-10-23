import React from 'react';
import './App.css';
import { useState } from 'react';
import NavBar from './navbar';

const navStates = ["closed","open"]

function App() {
  
  const [navIndex,setNav] = useState(0);

  function handleToggle() {
    setNav((navIndex +1) % 2);
  }

  let navState = navStates[navIndex]

  return (
    <>
    <main className={navState}></main>
    <button type='button' className={navState} onClick={handleToggle}></button>
    <NavBar navState = {navState}></NavBar>
    </>
  );
}

export default App;
