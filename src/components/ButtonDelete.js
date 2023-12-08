import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";

function NoteDeleteButton({ id, onDelete }) {
  return (
    <button className="" onClick={() => onDelete(id)}>
      <DeleteIcon sx={{ color: red[500] }} />
    </button>
  );
}

export default NoteDeleteButton;
