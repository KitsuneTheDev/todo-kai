import Notes from "./Notes.jsx";

export default function RightSidebar() {
    return (
        <div className="col-span-1 row-span-10 bg-white rounded-xl border-1 border-black">
            <h2 className="text-center text-3xl text-green-900">Notes</h2>
            <hr></hr>
            <Notes />
            <button className="note_button !bg-green-200 mt-1">Add Note +</button>
        </div>
    );
}