import axios from 'axios';

// Mock API endpoint for transactions
export const getTransactions = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: [
          { id: 1, description: 'Groceries', amount: 50, type: 'expense', category: 'Food', date: '2025-03-29' },
          { id: 2, description: 'Salary', amount: 5000, type: 'income', category: 'Income', date: '2025-03-29' },
          { id: 3, description: 'Electricity Bill', amount: 100, type: 'expense', category: 'Utilities', date: '2025-03-29' },
        ],
      });
    }, 1500); // Simulating a delay for API response
  });
};

// Mock API endpoint for adding transactions
export const addTransaction = (transaction) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: { id: Date.now(), ...transaction } });
    }, 1000); // Simulating a delay for API response
  });
};

// Mock API endpoint for deleting transactions
export const deleteTransaction = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: { message: 'Transaction deleted successfully' } });
    }, 1000); // Simulating a delay for API response
  });
};

// Mock API endpoint for dashboard data
export const getDashboardData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          income: 5000,
          expenses: 2000,
          budget: 1000,
        }
      });
    }, 1000); // Simulating a delay for API response
  });
};
