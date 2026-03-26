function Footer({totalSpend, totalTransactions, onDeleteAll}) {
  return (
    <footer className="footer-bar" aria-label="Expense summary">
      <p className="footer-bar__item">
        Total Spend: <span>${totalSpend}</span>
      </p>
      <p className="footer-bar__item">
        Total Transactions: <span>{totalTransactions}</span>
      </p>
      <button type="button" className="expense-card__btn expense-card__btn--delete" onClick={onDeleteAll}>Delete All</button>
    </footer>
  );
}

export default Footer;
