import React, { useState } from "react";

const BookCreate = ({ onInputSubmit }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title !== "") onInputSubmit(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Todo</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <button className="button" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default BookCreate;
