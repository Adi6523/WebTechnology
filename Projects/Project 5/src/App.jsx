import { useState } from 'react';
import AddExpense from './components/AddExpense';
import ExpenseList from './components/ExpenseList';

function App() {
  // State to manage the list of expenses
  // Each expense is an object: { id: number, title: string, amount: number }
  const [expenses, setExpenses] = useState([]);

  // Function to add a new expense
  const handleAddExpense = (newExpense) => {
    // We add the new expense to the end of the existing list
    setExpenses([...expenses, newExpense]);
  };

  // Function to delete an expense by its unique ID
  const handleDeleteExpense = (idToRemove) => {
    // Filter out the expense that matches the given ID
    const updatedExpenses = expenses.filter(expense => expense.id !== idToRemove);
    setExpenses(updatedExpenses);
  };

  // Calculate total expense amount using the reduce function
  const totalAmount = expenses.reduce((acc, current) => acc + current.amount, 0);

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      
      {/* Pass the handleAddExpense function as a prop so the form can send data back */}
      <AddExpense onAdd={handleAddExpense} />

      {/* Pass the expenses array and the delete handler as props to the list */}
      <ExpenseList expenses={expenses} onDelete={handleDeleteExpense} />

      {/* Total Calculation Section */}
      <div className="total-expense">
        Total: ${totalAmount.toFixed(2)}
      </div>
    </div>
  );
}

export default App;
