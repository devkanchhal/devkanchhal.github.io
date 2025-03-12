import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between sm:py-7 pt-7 pb-0 px-6">
      <a href="/" className="transform transition-transform duration-300 hover:scale-105">
        <h1 className="text-2xl sm:text-lg font-medium">DEV .K</h1>
      </a>

      <div className="hidden sm:flex gap-10 items-center">
        <a href="#home" className="text-sm text-slate-600 hover:text-primary hover:font-medium">
          HOME
        </a>
        <a href="#group-projects" className="text-sm text-slate-600 hover:text-primary hover:font-medium">
          PROJECTS
        </a>
        <a href="#connect" className="text-sm text-slate-600 hover:text-primary hover:font-medium">
          CONTACT ME
        </a>
      </div>

      {/* mobile view */}
      <button
        className="sm:hidden text-3xl text-slate-700 hover:text-primary"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* dropdown */}
      {menuOpen && (
        <div className="absolute top-16 right-6 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-4 sm:hidden">
          <a href="#home" className="text-xl text-slate-600 hover:text-primary" onClick={() => setMenuOpen(false)}>
            HOME
          </a>
          <a href="#group-projects" className="text-xl text-slate-600 hover:text-primary" onClick={() => setMenuOpen(false)}>
            PROJECTS
          </a>
          <a href="#connect" className="text-xl text-slate-600 hover:text-primary" onClick={() => setMenuOpen(false)}>
            CONTACT ME
          </a>
        </div>
      )}
    </header>
  );
}
