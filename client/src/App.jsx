import { useState } from "react";
import "./App.css";
import CalendarPage from "./pages/CalendarPage.jsx";

function App() {
    const [viewDate, setViewDate] = useState(() => {
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth(), 1);
    });

    return (
        <div className="app-shell">
            <CalendarPage viewDate={viewDate} setViewDate={setViewDate} />
        </div>
    );
}

export default App;
