import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-blue-600 p-4 text-white">
      <div className="flex justify-between items-center">
        {/* Left side logo */}
        <div className="text-xl font-bold">
          <a href="/dashboard">Logo</a>
        </div>

        {/* Right side navigation for mobile */}
        <nav className={`sm:block ${menuOpen ? "block" : "hidden"} sm:block`}>
          <ul className="flex space-x-6 sm:flex-row flex-col sm:space-x-6 space-y-4 sm:space-y-0">
            <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
            <li><a href="/transactions" className="hover:underline">Transactions</a></li>
            <li><a href="/budgets" className="hover:underline">Budgets</a></li>
            <li><a href="/login" className="hover:underline">Login</a></li>
            <li><a href="/register" className="hover:underline">Register</a></li>
          </ul>
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="sm:hidden">
          <button className="text-white" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
