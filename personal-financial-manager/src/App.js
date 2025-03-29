// src/App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';  // Import Layout component
import Dashboard from './pages/Dashboard';  // Import your pages
import TransactionPage from './pages/TransactionPage';
import BudgetPage from './pages/BudgetPage';
import Login from './pages/Login';
import Register from './pages/Register';

// Define your routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,  // Use the Layout component as a wrapper
    children: [
      {
        path: "",  // Default route
        element: <Dashboard />,  // Render Dashboard inside the Layout
      },
      {
        path: "dashboard",  // Render Dashboard when path is /dashboard
        element: <Dashboard />,
      },
      {
        path: "transactions",  // Render TransactionPage when path is /transactions
        element: <TransactionPage />,
      },
      {
        path: "budgets",  // Render BudgetPage when path is /budgets
        element: <BudgetPage />,
      },
      {
        path: "login",  // Render Login page when path is /login
        element: <Login />,
      },
      {
        path: "register",  // Render Register page when path is /register
        element: <Register />,
      },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />  
  );
};

export default App;
