import "./notes.css";

export default function NotesPanel({
    selection,
    monthNote,
    setMonthNote,
    rangeNote,
    setRangeNote,
}) {
    return (
        <aside className="notes-panel">
            <h2>Monthly Notes</h2>
            <textarea
                value={monthNote}
                onChange={(e) => setMonthNote(e.target.value)}
                placeholder="Monthly notes..."
            />

            <h2>Selected Range Notes</h2>
            <textarea
                value={rangeNote}
                onChange={(e) => setRangeNote(e.target.value)}
                disabled={!selection.start}
                placeholder="Range notes..."
            />
        </aside>
    );
}
