import React from 'react';

const TransactionList = ({ transactions, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-4">Transaction List</h2>

      <table className="min-w-full table-auto border-collapse border border-gray-300 shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-6 py-3 text-sm font-medium text-gray-700 border-b">Description</th>
            <th className="px-6 py-3 text-sm font-medium text-gray-700 border-b">Amount</th>
            <th className="px-6 py-3 text-sm font-medium text-gray-700 border-b">Type</th>
            <th className="px-6 py-3 text-sm font-medium text-gray-700 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm font-medium text-gray-900 border-b">{transaction.description}</td>
              <td className="px-6 py-4 text-sm text-gray-800 border-b">${transaction.amount}</td>
              <td className="px-6 py-4 text-sm text-gray-800 border-b capitalize">{transaction.type}</td>
              <td className="px-6 py-4 text-sm text-blue-500 cursor-pointer border-b" onClick={() => onDelete(transaction.id)}>
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
