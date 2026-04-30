import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, onDelete }) {
  // Conditional rendering: If there are no expenses, show a friendly message
  if (expenses.length === 0) {
    return <div className="no-expenses">No expenses added yet.</div>;
  }

  return (
    <div className="expense-list">
      {/* Loop through the expenses array using map() */}
      {/* For each expense object, we render an ExpenseItem component */}
      {expenses.map((expense) => (
        <ExpenseItem 
          key={expense.id} // React needs a unique key for each list item
          expense={expense} // Pass the single expense object as a prop
          onDelete={onDelete} // Pass down the delete handler
        />
      ))}
    </div>
  );
}

export default ExpenseList;
