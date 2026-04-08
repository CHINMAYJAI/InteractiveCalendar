const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export default function CalendarHeader({ viewDate, setViewDate }) {
    return (
        <div className="panel-header">
            <button
                className="nav-button"
                onClick={() =>
                    setViewDate(
                        (d) => new Date(d.getFullYear(), d.getMonth() - 1, 1)
                    )
                }
            >
                ←
            </button>

            <h2>
                {MONTHS[viewDate.getMonth()]} {viewDate.getFullYear()}
            </h2>

            <button
                className="nav-button"
                onClick={() =>
                    setViewDate(
                        (d) => new Date(d.getFullYear(), d.getMonth() + 1, 1)
                    )
                }
            >
                →
            </button>
        </div>
    );
}
