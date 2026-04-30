import { useState } from 'react';

function AddExpense({ onAdd }) {
  // State for input fields
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Basic validation to ensure fields are not empty
    if (!title || !amount) {
      alert("Please fill in both fields!");
      return;
    }

    // Create a new expense object
    // Note: Date.now() is used to generate a simple unique ID
    const newExpense = {
      id: Date.now(),
      title: title,
      amount: parseFloat(amount) // Convert amount string to number
    };

    // Send the new expense to the parent component (App.jsx)
    onAdd(newExpense);

    // Clear input fields after adding
    setTitle('');
    setAmount('');
  };

  return (
    <form className="add-expense-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <label>Expense Title</label>
        <input 
          type="text" 
          placeholder="e.g. Groceries" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
      </div>
      
      <div className="input-group">
        <label>Amount ($)</label>
        <input 
          type="number" 
          placeholder="e.g. 50" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
        />
      </div>
      
      <button type="submit" className="btn-add">Add Expense</button>
    </form>
  );
}

export default AddExpense;
