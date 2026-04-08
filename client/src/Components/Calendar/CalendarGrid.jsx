import { useEffect, useState } from "react";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function CalendarGrid({
    calendarCells,
    selection,
    selectDay,
    isSameDate,
    isBetween,
}) {
    const [today, setToday] = useState(() => {
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth(), now.getDate());
    });

    useEffect(() => {
        const now = new Date();
        const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
        const timeout = midnight.getTime() - now.getTime();

        const timer = setTimeout(() => {
            const nextDay = new Date();
            setToday(new Date(nextDay.getFullYear(), nextDay.getMonth(), nextDay.getDate()));
        }, timeout + 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="calendar-grid-header">
                {DAYS.map((d) => (
                    <span key={d} className="day-label">
                        {d}
                    </span>
                ))}
            </div>

            <div className="calendar-grid-body">
                {calendarCells.map((date, i) => {
                    if (!date)
                        return <span key={i} className="calendar-cell empty" />;

                    const isStart = isSameDate(date, selection.start);
                    const isEnd = isSameDate(date, selection.end);
                    const isToday = isSameDate(date, today);

                    const classes = ["calendar-cell"];
                    if (isStart || isEnd) classes.push("calendar-cell-active");
                    if (isBetween(date, selection.start, selection.end))
                        classes.push("calendar-cell-range");
                    if (isToday) classes.push("calendar-cell-today");

                    return (
                        <button
                            key={i}
                            className={classes.join(" ")}
                            onClick={() => selectDay(date)}
                            aria-current={isToday ? "date" : undefined}
                        >
                            {date.getDate()}
                        </button>
                    );
                })}
            </div>
        </>
    );
}
