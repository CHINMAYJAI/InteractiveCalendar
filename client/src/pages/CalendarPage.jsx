import { useEffect, useMemo, useState } from "react";
import Hero from "../Components/Hero/Hero";
import CalendarPanel from "../Components/Calendar/CalendarPanel";
import NotesPanel from "../Components/Notes/NotesPanel";

const formatDateKey = (date) => date.toISOString().slice(0, 10);

const buildMonthGrid = (year, month) => {
    const firstOfMonth = new Date(year, month, 1);
    const startOffset = (firstOfMonth.getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells = [];

    for (let i = 0; i < startOffset; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));

    const rem = (7 - (cells.length % 7)) % 7;
    for (let i = 0; i < rem; i++) cells.push(null);

    return cells;
};

const isSameDate = (a, b) => a?.getTime() === b?.getTime();

const isBetween = (day, start, end) =>
    day &&
    start &&
    end &&
    day.getTime() > start.getTime() &&
    day.getTime() < end.getTime();

const getMonthNoteKey = (y, m) => `month-note-${y}-${m}`;
const getRangeNoteKey = (start, end) =>
    `range-note-${formatDateKey(start)}-${formatDateKey(end ?? start)}`;

export default function CalendarPage({ viewDate, setViewDate }) {
    const [selection, setSelection] = useState({ start: null, end: null });
    const [monthNote, setMonthNote] = useState("");
    const [rangeNote, setRangeNote] = useState("");
    const [rangeKey, setRangeKey] = useState("");

    const calendarCells = useMemo(
        () => buildMonthGrid(viewDate.getFullYear(), viewDate.getMonth()),
        [viewDate]
    );

    useEffect(() => {
        const saved = localStorage.getItem(
            getMonthNoteKey(viewDate.getFullYear(), viewDate.getMonth())
        );
        setMonthNote(saved ?? "");
    }, [viewDate]);

    useEffect(() => {
        if (!selection.start) return setRangeNote("");

        const key = getRangeNoteKey(selection.start, selection.end);
        setRangeKey(key);
        setRangeNote(localStorage.getItem(key) ?? "");
    }, [selection]);

    useEffect(() => {
        localStorage.setItem(
            getMonthNoteKey(viewDate.getFullYear(), viewDate.getMonth()),
            monthNote
        );
    }, [monthNote, viewDate]);

    useEffect(() => {
        if (rangeKey) localStorage.setItem(rangeKey, rangeNote);
    }, [rangeNote, rangeKey]);

    const selectDay = (date) => {
        if (!selection.start || selection.end)
            return setSelection({ start: date, end: null });

        if (isSameDate(date, selection.start))
            return setSelection({ start: date, end: null });

        if (date < selection.start)
            setSelection({ start: date, end: selection.start });
        else setSelection({ start: selection.start, end: date });
    };

    return (
        <section className="calendar-page">
            <div className="calendar-layout">
                <Hero
                    viewDate={viewDate}
                    calendarCells={calendarCells}
                    selection={selection}
                />

                <CalendarPanel
                    viewDate={viewDate}
                    setViewDate={setViewDate}
                    calendarCells={calendarCells}
                    selection={selection}
                    setSelection={setSelection}
                    selectDay={selectDay}
                    isSameDate={isSameDate}
                    isBetween={isBetween}
                />

                <NotesPanel
                    viewDate={viewDate}
                    selection={selection}
                    monthNote={monthNote}
                    setMonthNote={setMonthNote}
                    rangeNote={rangeNote}
                    setRangeNote={setRangeNote}
                />
            </div>
        </section>
    );
}
