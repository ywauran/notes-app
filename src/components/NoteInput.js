import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      limit: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return { title: event.target.value };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return { body: event.target.value };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="flex flex-col space-y-3">
        <h2 className="text-xl">Buat catatan</h2>
        <form
          onSubmit={this.onSubmitEventHandler}
          className="flex flex-col space-y-3"
        >
          <p className="note-input__title__char-limit">
            Sisa karakter = {this.state.limit - this.state.title.length}
          </p>
          <input
            className="bg-[#373737] px-5 py-1 text-white"
            type="text"
            placeholder="Ini adalah judul ..."
            required
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <textarea
            className="bg-[#373737] px-5 py-1 text-white"
            type="text"
            placeholder="Tuliskan catatanmu disini ..."
            required
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          />
          <button
            type="submit"
            className="bg-[#169E16] text-white font-semibold"
          >
            Buat
          </button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
