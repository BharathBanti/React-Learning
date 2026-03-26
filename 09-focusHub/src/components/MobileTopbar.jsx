import './styles/MobileTopbar.css';

function MobileTopbar({ onOpen, activeItem, isDarkTheme, onToggleTheme }) {
  const navIconMap = {
    Dashboard: 'fa-solid fa-gauge-high',
    Goals: 'fa-solid fa-bullseye',
    Tasks: 'fa-solid fa-list-check',
    Habits: 'fa-solid fa-repeat',
    Journal: 'fa-solid fa-book-open',
    Analytics: 'fa-solid fa-chart-line',
  };

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button aria-label="Open sidebar" className="menu-btn" onClick={onOpen}>
          <i className="fa-solid fa-bars" aria-hidden="true" />
        </button>
        <div className="topbar-brand" aria-label="focusHub brand">
          <i className="fa-solid fa-bolt" aria-hidden="true" />
          <span>focusHub</span>
        </div>

      </div>

      <p className="topbar-active-item">
        <i
          className={navIconMap[activeItem] ?? 'fa-regular fa-circle'}
          aria-hidden="true"
        />
        <span>{activeItem}</span>
      </p>

      <div className="topbar-right">
        <button
          aria-label="Toggle theme"
          className="theme-toggle-btn"
          onClick={onToggleTheme}
        >
          <i
            className={`fa-solid ${isDarkTheme ? 'fa-sun' : 'fa-moon'}`}
            aria-hidden="true"
          />
        </button>
        <img src="/profile-image.jpeg" alt="profile" className="profile-image" />
      </div>
    </header>
  );
}

export default MobileTopbar;
