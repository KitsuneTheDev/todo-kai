

export default function Notes() {

    const notes = [
        {
        id: 1,
        description: "Before Meeting",
        email: "kitsuthedev@gmail.com",
        phone: "+905315220154",
        note: "Before meeting send location to Kitsu"
    },{
        id: 2,
        description: "Rearrenge Meeting",
        phone: "+905427178342",
        note: "postpone meeting on next wednesday"
    }];
    return (
        <>
            <div className="note_wrapper">
                {notes.map(note => {
                    return (
                        <>
                            <ul key={note.id} className="note_list">
                                <li>{note.description}</li>
                                <li>{note.email}</li>
                                <li>{note.phone}</li>
                                <li>{note.link}</li>
                                <li>{note.note}</li>
                            </ul>
                            <hr></hr>
                        </>
                    );
                })}
            </div>
        </>
    );
}