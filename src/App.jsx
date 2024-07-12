import { useState } from 'react'
import './App.css'
import React from 'react';
import NavBar from './components/NavBar';
import { Experience } from './components/Experience';
import { Banner } from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
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
        <Projects></Projects>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
