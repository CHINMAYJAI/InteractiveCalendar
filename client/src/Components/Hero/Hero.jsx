import "./hero.css";

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

export default function Hero({ viewDate, calendarCells, selection }) {
    const selectedDays = selection.start
        ? selection.end
            ? Math.round(
                  (selection.end - selection.start) / (1000 * 60 * 60 * 24)
              ) + 1
            : 1
        : 0;

    return (
        <article className="hero-card">
            <div className="hero-media" />
            <div className="hero-copy">
                <p className="eyebrow">Interactive wall calendar</p>

                <h1>
                    {MONTHS[viewDate.getMonth()]}
                    <br />
                    {viewDate.getFullYear()}
                </h1>

                <p className="hero-description">
                    A tactile planning surface with a hero image.
                </p>

                <div className="hero-footer">
                    <div>
                        <span>{selectedDays}</span>
                        <small>days selected</small>
                    </div>
                    <div>
                        <span>{calendarCells.filter(Boolean).length}</span>
                        <small>days in month</small>
                    </div>
                </div>
            </div>
        </article>
    );
}
