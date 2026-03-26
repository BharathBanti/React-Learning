import './styles/Sidebar.css';

function Sidebar({ sidebarOpen, onClose, navItems, activeItem, onSelectItem }) {
  const navIconMap = {
    Dashboard: 'fa-solid fa-gauge-high',
    Goals: 'fa-solid fa-bullseye',
    Tasks: 'fa-solid fa-list-check',
    Habits: 'fa-solid fa-repeat',
    Journal: 'fa-solid fa-book-open',
    Analytics: 'fa-solid fa-chart-line',
  };

  return (
    <aside className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <div className="sidebar-header">
        <h1 className="sidebar-brand">FocusHub</h1>
        <button
          aria-label="Close sidebar"
          className="sidebar-close-btn"
          onClick={onClose}
        >
          <i className="fa-solid fa-xmark" aria-hidden="true" />
        </button>
      </div>

      <nav className="sidebar-nav">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item}>
              <button
                className={`nav-item ${item === activeItem ? 'active' : ''}`}
                onClick={() => onSelectItem(item)}
              >
                <i
                  className={`nav-icon ${navIconMap[item] ?? 'fa-regular fa-circle'}`}
                  aria-hidden="true"
                />
                <span>{item}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
