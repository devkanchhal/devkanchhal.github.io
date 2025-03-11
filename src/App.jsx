import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './style';
import Navbar from './components/Navbar';
import About from './components/About';
import Group from './components/Group';
import Connect from './components/Connect';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="py-4 w-full md:w-[75vw] mx-auto px-4 max-w-[950px]">
        <Navbar />
      </div>
      
      <section id="home" className="w-full sm:w-[75vw] mx-auto">
        <About />
      </section>

      <hr className="border-t-2 border-gray-100" />
    
      <section id="group-projects" className="bg-gray-50 pt-8 pb-24">
        <Group />
      </section>

      <hr className="border-t-2 border-gray-100" />

      <section id="connect" className="pt-24 pb-32 flex items-center justify-center">
        <Connect /> 
      </section>
      
    </div>
  )
}

export default App