import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import React from 'react';
import NavBar from './components/NavBar';
import { Experience } from './components/Experience';
import { Banner } from './components/Banner';
function App() {

  return (
    <>
    <div className='App'>
      <NavBar></NavBar>
      <Banner></Banner>
      <Experience></Experience>
      </div>
    </>
  )
}

export default App
