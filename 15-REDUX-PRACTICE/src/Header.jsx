function Header() {
  return (
    <header className="mx-auto my-5 flex w-full max-w-6xl bg-white items-center justify-between rounded-2xl px-8 py-6 shadow-lg">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Employee Management</h1>
        <h3 className="text-sm text-slate-500 md:text-base">
          Manage Employee Records With Modern React Redux Toolkit
        </h3>
      </div>
      <img
        src="/user.avif"
        alt="user-image"
        className="h-16 w-16 rounded-full border-x-4 border-blue-600 object-cover"
      />
    </header>
  );
}

export default Header;
