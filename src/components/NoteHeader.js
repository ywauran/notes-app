// Di dalam NoteHeader.jsx
import React from "react";
import NoteSearch from "./NoteSearch";

function NoteHeader({ onSearch, keyword }) {
  return (
    <div className="flex justify-between items-center px-5 py-5 bg-[#292828]">
      <h1 className="text-2xl text-white sm:text-3xl">Notes</h1>
      <NoteSearch onSearch={onSearch} keyword={keyword} />
    </div>
  );
}

export default NoteHeader;
