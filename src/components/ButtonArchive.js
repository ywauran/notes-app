import React from "react";
import ArchiveIcon from "@mui/icons-material/Archive";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import { green } from "@mui/material/colors";

function NoteArchiveButton({ id, onArchive, isArchive }) {
  return (
    <button className="" onClick={() => onArchive(id)}>
      {isArchive ? (
        <UnarchiveIcon sx={{ color: "white" }} />
      ) : (
        <ArchiveIcon sx={{ color: green[500] }} />
      )}
    </button>
  );
}

export default NoteArchiveButton;
