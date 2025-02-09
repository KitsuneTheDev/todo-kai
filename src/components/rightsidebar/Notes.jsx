import React from "react";

export default function Notes() {

    const notes = [
        {
        id: 1,
        description: "Before Meeting",
        email: "kitsuthedev@gmail.com",
        phone: "(+90)3333333",
        note: "Before meeting send location to Kitsu"
    },{
        id: 2,
        description: "Rearrenge Meeting",
        phone: "(+90)5555555",
        note: "postpone meeting on next wednesday"
    }];
    return (
            <ul className="note_wrapper text-start">
                {notes.map(note => {
                    return(
                    <React.Fragment key={note.id}>
                        <li className="grid grid-cols-1">
                            {Object.entries(note).map(([key, value]) => {
                                return (
                                    key !== "id" && <p className="col-span-1 row-span-1 m-1" key={key}>{key !== "description" && key !== "note" && `${key.toUpperCase()}: `}{value}</p>
                                );
                            })}
                        </li>
                        <hr></hr>
                    </React.Fragment>
                    );
                })}
            </ul>
    );
}