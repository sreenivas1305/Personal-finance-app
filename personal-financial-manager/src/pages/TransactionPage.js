import React, { useState, useEffect } from 'react';
import TransactionForm from '../components/TransactionFrom';
import TransactionList from '../components/TransactionList';
import { deleteTransaction } from '../services/api';

const TransactionPage = () => {
  const [transactions, setTransactions] = useState([]);

  // Static data to mock API response
  const staticData = [
    { id: 1, description: 'Groceries', amount: 50, type: 'expense', category: 'Food' },
    { id: 2, description: 'Salary', amount: 5000, type: 'income', category: 'Income' },
    { id: 3, description: 'Electricity Bill', amount: 100, type: 'expense', category: 'Utilities' },
  ];

  useEffect(() => {
    // Replace this with an API call later
    const fetchTransactions = async () => {
      // Simulating an API call
      const result = staticData; // Replace this with the API call if available
      setTransactions(result);
    };

    fetchTransactions();
  }, []);

  const handleDelete = async (id) => {
    await deleteTransaction(id); // You can call the actual delete API when ready
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  const handleAddTransaction = async (transaction) => {
    // Simulating an API request
    const newTransaction = { id: transactions.length + 1, ...transaction };
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Transactions</h2>
      <TransactionForm onSubmit={handleAddTransaction} />
      <TransactionList transactions={transactions} onDelete={handleDelete} />
    </div>
  );
};

export default TransactionPage;
