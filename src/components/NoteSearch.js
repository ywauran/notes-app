// NoteSearch.jsx
import React from "react";

class NoteSearch extends React.Component {
  handleChange = (e) => {
    this.props.onSearch(e.target.value);
  };

  render() {
    return (
      <input
        type="text"
        placeholder="Cari catatan..."
        onChange={this.handleChange}
        value={this.props.keyword}
        className="px-2 py-1 rounded-md focus:outline-none"
      />
    );
  }
}

export default NoteSearch;
