function ExpenseItem({ expense, onDelete }) {
  return (
    <div className="expense-item">
      {/* Displaying expense details passed from props */}
      <div className="expense-info">
        <span className="expense-title">{expense.title}</span>
        <span className="expense-amount">${expense.amount.toFixed(2)}</span>
      </div>
      
      {/* Delete button that triggers the onDelete function passed via props */}
      {/* We pass the expense.id so the parent knows which one to remove */}
      <button 
        className="btn-delete" 
        onClick={() => onDelete(expense.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default ExpenseItem;
