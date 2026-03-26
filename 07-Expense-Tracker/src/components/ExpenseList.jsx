import ExpenseCard from './ExpenseCard';

function ExpenseList({ expenseList, onDelete }) {
  return (
    <>
      {expenseList.length === 0 ? (
        <div className="expense-empty-state">
          <h3 className="expense-empty-state__title">No expenses yet</h3>
          <p className="expense-empty-state__text">
            Add your first expense above to start tracking spending.
          </p>
        </div>
      ) : (
        <ul className="expense-list">
          {expenseList.map((expense) => {
            return (
              <li className="expense-list__item" key={expense.id}>
                <ExpenseCard
                  expense={expense}
                  onDelete={() => onDelete(expense.id)}
                />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default ExpenseList;
