import '../styles/App.css';
import Header from './Header';
import InputForm from './InputForm';
import ExpenseList from './ExpenseList';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [expenseList, setExpenseList] = useState([]);
  const [filter, setFilter] = useState('All');
  const [sortby, setSortby] = useState('latest');

  let filteredExpenses =
    filter === 'All'
      ? expenseList
      : expenseList.filter((expense) => expense.category === filter);

  let sortedExpenses = [...filteredExpenses];

  if (sortby === 'latest') {
    sortedExpenses.sort((a, b) => b.date.localeCompare(a.date));
  } else {
    sortedExpenses.sort((a, b) => a.date.localeCompare(b.date));
  }

  const totalSpend = sortedExpenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );
  const totalTransactions = sortedExpenses.length;

  function addExpenseHandler(expenseData) {
    setExpenseList((prevExpense) => {
      return [expenseData, ...prevExpense];
    });
  }

  function handleFilter(category) {
    setFilter(category);
  }

  function handleSortby(sortby) {
    setSortby(sortby);
  }

  function handleDelete(expenseId) {
    setExpenseList((prevExpenseList) =>
      prevExpenseList.filter((expense) => expense.id !== expenseId)
    );
  }

  function handleDeleteAll(){
    if(expenseList.length === 0){
      alert("No transactions to delete");
      return;
    }
    if(confirm('Are you sure to delete all the transactions?')){
      setExpenseList([]);
    }
  }

  return (
    <div className="app-shell">
      <main className="app-content">
        <Header onAddFilter={handleFilter} onAddSortby={handleSortby} />
        <InputForm onAddExpense={addExpenseHandler} />
        <ExpenseList expenseList={sortedExpenses} onDelete={handleDelete} />
      </main>
      <Footer totalSpend={totalSpend} totalTransactions={totalTransactions} onDeleteAll={handleDeleteAll} />
    </div>
  );
}

export default App;
