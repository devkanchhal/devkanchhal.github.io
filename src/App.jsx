import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './style';
import Navbar from './components/Navbar';
import About from './components/About';
import Group from './components/Group';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="py-4 w-full md:w-[75vw] mx-auto px-4 max-w-[950px]">
        <Navbar />
      </div>
      
      <section id="home" className="w-full sm:w-[75vw] mx-auto">
          <About />
      </section>

      <hr className="border-t-2 border-gray-200" />
    
      <section id="group-projects" className="h-screen flex items-center justify-center bg-gray-100">
        {/* IF WE WANT SECTION BG COLORS -the sections themselves in here (when we make the files) will be w-[80vw] */}
        <Group />
      </section>

      <section id="personal-projects" className="h-screen flex items-center justify-center bg-gray-300">
        <h2 className="text-3xl font-bold">Personal Projects Section</h2>
      </section>
      
    </div>
  )
}

export default App