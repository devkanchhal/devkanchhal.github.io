import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const navigate = useNavigate();

  const linkClassNames = ({ isActive }) => 
    isActive ? "text-pink-500 font-bold" : "text-gray-700 hover:text-pink-500 font-medium";

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <nav className="h-32 fixed top-0 bg-primary w-full overflow-hidden flex items-center px-4 shadow-md">
      <img 
        src={logo} 
        alt="Brand logo" 
        className="h-28 w-28 transition transform hover:scale-95 active:scale-90 cursor-pointer"
        onClick={handleLogoClick}
      />
      <div className="flex ml-auto space-x-4">
        <NavLink to="/about" className={linkClassNames}>
          About
        </NavLink>
        <NavLink to="/event-flowers" className={linkClassNames}>
          Event Flowers
        </NavLink>
        <NavLink to="/floral-workshop" className={linkClassNames}>
          Floral Workshop
        </NavLink>
        <NavLink to="/ikebana-flowers" className={linkClassNames}>
          Ikebana Flowers
        </NavLink>
        <NavLink to="/enquire" className={linkClassNames}>
          Enquire
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
