import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import NavBar from './components/NavBar';
import { Banner } from './components/Banner';
function App() {

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
    </>
  )
}

export default App
