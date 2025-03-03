import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './style';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {/* adjust mt to be height of the navbar */}
        <main className="flex-grow min-h-[calc(100vh_-_50px)] mt-32">
          <Routes>
            <Route path='/' element={<Dashboard></Dashboard>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App