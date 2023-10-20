import React, { useState } from "react";

const BookEdit = ({ todo, handleSubmit }) => {
  const [input, setInput] = useState(todo.content);

  return (
    <div>
      <form
        className="book-edit"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(todo.id, input);
        }}
      >
        <label>Edit Todo</label>
        <input
          type="text"
          className="input"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button className="button is-primary">Save Changes</button>
      </form>
    </div>
  );
};

export default BookEdit;
