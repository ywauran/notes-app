import React from "react";
import NoteItem from "./NoteItem";

function NoteItemList({ notes, onDelete, onArchive, onActive }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {notes.map((note) => (
        <NoteItem
          {...note}
          key={note.id}
          id={note.id}
          onDelete={onDelete}
          onActive={onActive}
          onArchive={onArchive}
          isArchive={note.archived}
        />
      ))}
    </div>
  );
}

export default NoteItemList;
