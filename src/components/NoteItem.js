import React from "react";
import NoteContent from "./NoteContent";
import ButtonDelete from "./ButtonDelete";
import ButtonArchive from "./ButtonArchive";

function NoteItem({
  title,
  body,
  id,
  onDelete,
  onArchive,
  isArchive,
  createdAt,
}) {
  return (
    <div className="">
      <NoteContent title={title} date={createdAt} body={body} />
      <div className="flex justify-end px-5 py-2 space-x-2 border-2 border-white">
        <ButtonDelete id={id} onDelete={onDelete} />
        <ButtonArchive id={id} onArchive={onArchive} isArchive={isArchive} />
      </div>
    </div>
  );
}

export default NoteItem;
