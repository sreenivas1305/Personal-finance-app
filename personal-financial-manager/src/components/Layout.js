import React from 'react';
import { Outlet } from 'react-router-dom';  // This will render child routes
import Header from './Header';  // Your Header component
import Footer from './Footer';  // Your Footer component

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Render Header */}
      <Header />

      {/* Main content area with scrollable content */}
      <main className="flex-1 overflow-y-auto p-4">
        <Outlet />  {/* This will render child components like Dashboard, Login, etc. */}
      </main>

      {/* Render Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
