function InputBox({ searchTerm, setSearchTerm }) {
  return (
    <section className="search-panel">
      <div className="search-panel__label-group">
        <label htmlFor="input">Search GitHub users</label>
        <span>Try `gaearon`, `torvalds`, or your own username</span>
      </div>

      <div className="search-box">
        <input
          type="text"
          id="input"
          title="Search here"
          placeholder="Type a GitHub username..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="button">Live Search</button>
      </div>
    </section>
  );
}

export default InputBox;
