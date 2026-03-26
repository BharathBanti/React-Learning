import { useEffect, useState } from 'react';
import './App.css';
import Analytics from './components/Analytics';
import Dashboard from './components/Dashboard';
import Goals from './components/Goals';
import Habits from './components/Habits';
import Journal from './components/Journal';
import MobileTopbar from './components/MobileTopbar';
import Sidebar from './components/Sidebar';
import Tasks from './components/Tasks';

const THEME_STORAGE_KEY = 'focushub-theme';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    return savedTheme === 'dark';
  });

  const navItems = [
    'Dashboard',
    'Goals',
    'Tasks',
    'Habits',
    'Journal',
    'Analytics',
  ];

  const sectionComponents = {
    Dashboard,
    Goals,
    Tasks,
    Habits,
    Journal,
    Analytics,
  };

  const ActiveSection = sectionComponents[activeItem] ?? Dashboard;

  const handleSelectItem = (item) => {
    setActiveItem(item);
    setSidebarOpen(false);
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      isDarkTheme ? 'dark' : 'light'
    );
    localStorage.setItem(THEME_STORAGE_KEY, isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  return (
    <div className="app-shell">
      <div className="app-layout">
        {sidebarOpen && (
          <button
            aria-label="Close sidebar overlay"
            className="sidebar-overlay"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <Sidebar
          sidebarOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          navItems={navItems}
          activeItem={activeItem}
          onSelectItem={handleSelectItem}
        />

        <main className="main-content">
          <MobileTopbar
            onOpen={() => setSidebarOpen(true)}
            activeItem={activeItem}
            isDarkTheme={isDarkTheme}
            onToggleTheme={() => setIsDarkTheme((current) => !current)}
          />

          <ActiveSection />
        </main>
      </div>
    </div>
  );
}

export default App;
