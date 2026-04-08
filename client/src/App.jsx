import { useEffect, useState } from "react";
import "./App.css";
import CalendarPage from "./pages/CalendarPage.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [viewDate, setViewDate] = useState(() => {
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth(), 1);
    });

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        setDarkMode(storedTheme === "dark");
    }, []);

    useEffect(() => {
        const theme = darkMode ? "dark" : "light";
        document.documentElement.dataset.theme = theme;
        localStorage.setItem("theme", theme);
    }, [darkMode]);

    const goToday = () => {
        const now = new Date();
        setViewDate(new Date(now.getFullYear(), now.getMonth(), 1));
    };

    return (
        <div className="app-shell">
            <Navbar
                darkMode={darkMode}
                onToggle={() => setDarkMode((prev) => !prev)}
                onToday={goToday}
            />
            <CalendarPage viewDate={viewDate} setViewDate={setViewDate} />
        </div>
    );
}

export default App;
