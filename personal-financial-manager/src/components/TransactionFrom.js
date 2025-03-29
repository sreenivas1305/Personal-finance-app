import React, { useState } from 'react';

const TransactionForm = ({ onSubmit }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure that all fields are filled before submitting
    if (!description || !amount || !category || !date) {
      alert('Please fill in all fields.');
      return;
    }

    // Submit the form data
    onSubmit({ description, amount, type, category, date });

    // Clear the form fields after submission
    setDescription('');
    setAmount('');
    setType('expense');
    setCategory('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label>Description</label>
        <input 
          type="text" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label>Amount</label>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label>Type</label>
        <select 
          value={type} 
          onChange={(e) => setType(e.target.value)} 
          required
          className="w-full p-2 border rounded"
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
      </div>
      <div>
        <label>Category</label>
        <input 
          type="text" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label>Date</label>
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
