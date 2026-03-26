function ExpenseCard({ expense, onDelete }) {
  return (
    <article className="expense-card">
      <div className="expense-card__main">
        <div className="expense-card__titleWrap">
          <h2 className="expense-card__title">{expense.title}</h2>
          <span className="expense-card__category">{expense.category}</span>
        </div>

        <p className="expense-card__amount">{expense.amount}</p>
        <p className="expense-card__date">{expense.date}</p>
      </div>

      <div className="expense-card__actions">
        <button
          className="expense-card__btn expense-card__btn--edit"
          type="button"
        >
          Edit
        </button>
        <button
          className="expense-card__btn expense-card__btn--delete"
          type="button" onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </article>
  );
}

export default ExpenseCard;
