function InputForm({ onOpenModal }) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="mx-auto my-5 w-full max-w-6xl rounded-2xl bg-white px-8 py-6 shadow-lg">
      <form
        className="flex flex-col gap-4 md:flex-row md:items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="&#128269; Search here"
          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 md:flex-1"
        />
        <div className="relative w-full md:w-52">
          <select
            name="Search"
            id="search"
            defaultValue="employee"
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 pr-10 text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
          >
            <option value="employee">Employee</option>
            <option value="role">Role</option>
            <option value="email">E-mail</option>
          </select>
        </div>
        <button
          type="button"
          onClick={onOpenModal}
          className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 active:scale-[0.99]"
        >
          &#43; Add New Record
        </button>
      </form>
    </div>
  );
}

export default InputForm;
