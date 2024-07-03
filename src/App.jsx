import { useState } from 'react'
import './App.css'
import React from 'react';
import NavBar from './components/NavBar';
import { Experience } from './components/Experience';
import { Banner } from './components/Banner';
import Skills from './components/Skills';
function App() {

  return (
    <>
      <div className='App'>
        <NavBar></NavBar>
        <Banner></Banner>
        <div className="experience-container">
        <Experience className="item"></Experience>
        </div>
        <Skills></Skills>
      </div>
    </>
  )
}

export default App
