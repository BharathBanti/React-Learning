function Header({onAddFilter, onAddSortby}) {

  return (
    <header className="header">
      <div className="header__titleRow">
        <h1 className="header__title">Expense Tracker</h1>
      </div>
      <label className="header__spend" htmlFor="filterby">
        Filter By
      </label>
      <select className="header__filter" name="totalSpent" id="filterby" onChange={(e) => onAddFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Food">Food</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Education">Education</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
        <option value="Other">Other</option>
      </select>
      <label className="header__spend" htmlFor="sortby">
        Sort By
      </label>
      <select className="header__filter" name="sortby" id="sortby" onChange={(e) => onAddSortby(e.target.value)}>
        <option value="latest">latest</option>
        <option value="oldest">oldest</option>
      </select>
    </header>
  );
}

export default Header;
