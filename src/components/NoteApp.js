import React from "react";
import { getInitialData, showFormattedDate } from "../utils/index";
import NoteHeader from "./NoteHeader";
import NoteInput from "./NoteInput";
import NoteItemList from "./NoteItemList";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      keyword: "", // Initialize keyword in state
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onSearchHandler = (keyword) => {
    this.setState({ keyword });
  };

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveEventHandler(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            createdAt: new Date(),
            body,
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    const notes = this.state.notes;
    const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
    );

    const notActive = filteredNotes.filter((note) => !note.archived);
    const active = filteredNotes.filter((note) => note.archived);
    return (
      <div className="bg-[#242121]">
        <NoteHeader
          onSearch={this.onSearchHandler}
          keyword={this.state.keyword}
        />
        <div className="flex flex-col px-10 py-5 space-y-3 text-white sm:px-36 md:px-46 lg:px-56">
          <NoteInput addNote={this.onAddNoteHandler} />
          <h2 className="text-xl">Catatan Aktif</h2>
          {notActive.length > 0 ? (
            <NoteItemList
              keyword={this.state.keyword}
              notes={notActive}
              onDelete={this.onDeleteHandler}
              onArchive={this.onArchiveEventHandler}
            />
          ) : (
            <p className="">Tidak Ada catatan</p>
          )}
          <h2 className="text-xl">Arsip</h2>
          {active.length > 0 ? (
            <NoteItemList
              keyword={this.state.keyword}
              notes={active}
              onDelete={this.onDeleteHandler}
              onArchive={this.onArchiveEventHandler}
            />
          ) : (
            <p className="">Tidak Ada catatan</p>
          )}
        </div>
      </div>
    );
  }
}

export default NoteApp;
