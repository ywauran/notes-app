import React from "react";
import { showFormattedDate } from "../utils/index";

function NoteContent({ title, body, date }) {
  return (
    <div className="p-2 border-2 border-white note-item__content">
      <h3 className="text-lg">{title}</h3>
      <p className="text-md">{showFormattedDate(date)}</p>
      <p className="text-sm text-justify">{body}</p>
    </div>
  );
}

export default NoteContent;
