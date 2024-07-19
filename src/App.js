import { GiQuickMan } from 'react-icons/gi';
import About from './About';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import { SiZomato } from 'react-icons/si';

function App() {
  const[mode, setdarkmode]= useState("light"); // Whether dark mode is enabled or not
  return (
  < >
  <Navbar title="Word Analyser" mode={mode} />
  <div className="container">

  <TextForm heading="Enter the text to analyse below"/>
  <About/>
  </div>
  
  </>
  );
}


export default App;

