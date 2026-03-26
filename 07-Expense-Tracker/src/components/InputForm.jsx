import { useState } from 'react';

function InputForm({onAddExpense}) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState('None');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  function handleSubmit(e){
    e.preventDefault();

    const expenseData = {
      id: Date.now(),
      title : title,
      amount : amount,
      category: category,
      date : date,
    };

    onAddExpense(expenseData);

    setTitle('');
    setAmount('');
    setCategory('None');
    setDate(new Date().toISOString().split('T')[0]);
  };

  return (
    <section className="expense-form-card">
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="expense-form__field">
          <label htmlFor="expensetitle">Title</label>
          <input
            type="text"
            name="expensetitle"
            id="expensetitle"
            placeholder="Enter expense title"
            value={title}
            onChange={(e) => setTitle(e.target.value)} required
          />
        </div>

        <div className="expense-form__field">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="0"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))} required
          />
        </div>

        <div className="expense-form__field">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Entertainment">Entertainment</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Education">Education</option>
            <option value="Shopping">Shopping</option>
            <option value="Bills">Bills</option>
            <option value="Other">Other</option>
            <option value="None">None</option>
          </select>
        </div>

        <div className="expense-form__field">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button className="expense-form__submit" type="submit">
          Add Expense
        </button>
      </form>
    </section>
  );
}

export default InputForm;
