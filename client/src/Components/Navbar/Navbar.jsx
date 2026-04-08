import "./navbar.css";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher.jsx";

function Navbar({ darkMode, onToggle, onToday }) {
    return (
        <header className="app-navbar">
            <div className="app-brand">
                <span className="app-logo">Interactive Calendar</span>
                <small className="app-subtitle">
                    Digital calendar dashboard
                </small>
            </div>
            <nav className="app-nav" aria-label="Primary navigation">
                <button className="nav-pill active" onClick={onToday}>
                    Today
                </button>
            </nav>
            <div className="app-actions">
                <ThemeSwitcher isDark={darkMode} onToggle={onToggle} />
            </div>
        </header>
    );
}

export default Navbar;
