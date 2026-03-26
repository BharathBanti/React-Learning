function Results({ data, loading, error, searchTerm }) {
  if (!searchTerm) {
    return (
      <section className="results-state results-state--empty">
        <p className="results-state__title">Start with a username.</p>
        <p className="results-state__copy">
          Results will appear here as soon as you begin typing.
        </p>
      </section>
    );
  }

  if (loading) {
    return (
      <section className="results-state results-state--loading">
        <p className="results-state__title">Searching GitHub...</p>
        <p className="results-state__copy">Pulling the latest matching profiles for you.</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="results-state results-state--error">
        <p className="results-state__title">Something went wrong.</p>
        <p className="results-state__copy">{error.message}</p>
      </section>
    );
  }

  if (!loading && data?.items?.length === 0) {
    return (
      <section className="results-state results-state--empty">
        <p className="results-state__title">No users found.</p>
        <p className="results-state__copy">Try a different username or a shorter search term.</p>
      </section>
    );
  }

  return (
    <section className="results-section">
      <div className="results-section__header">
        <p>Matches</p>
        <span>{data?.items?.length ?? 0} profiles</span>
      </div>

      <ul className="results-grid">
      {data?.items?.map((user) => (
        <User key={user.id} user={user} />
      ))}
      </ul>
    </section>
  );
}

function User({ user }) {
  return (
    <li className="user-card">
      <img
        className="user-card__avatar"
        src={user.avatar_url}
        alt={`${user.login} avatar`}
      />

      <div className="user-card__body">
        <p className="user-card__name">{user.login}</p>
        <a href={user.html_url} target="_blank" rel="noreferrer">
          View profile
        </a>
      </div>
    </li>
  );
}

export default Results;