import { useEffect, useState } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import "./calendar.css";

export default function CalendarPanel(props) {
    const [isFlipping, setIsFlipping] = useState(false);
    const [prevMonth, setPrevMonth] = useState(
        props.viewDate?.getMonth() ?? new Date().getMonth()
    );

    useEffect(() => {
        const currentMonth = props.viewDate?.getMonth() ?? new Date().getMonth();
        if (currentMonth !== prevMonth) {
            setIsFlipping(true);
            setPrevMonth(currentMonth);

            const timer = setTimeout(() => {
                setIsFlipping(false);
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [props.viewDate, prevMonth]);

    return (
        <div className={`calendar-panel ${isFlipping ? "flip-enter" : ""}`}>
            <CalendarHeader {...props} />

            <CalendarGrid {...props} />

            <div className="calendar-summary">
                <div className="summary-text">
                    <strong>Selected range</strong>
                    <p>{props.selection?.start ? "Range selected" : "No selection"}</p>
                </div>
                <button
                    className="reset-button"
                    onClick={() =>
                        props.setSelection({ start: null, end: null })
                    }
                >
                    Reset
                </button>
            </div>
        </div>
    );
}
