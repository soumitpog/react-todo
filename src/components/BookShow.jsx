import React, { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ todo, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  let content = <h3>{todo.content}</h3>;

  const handleSubmit = (id, input) => {
    onEdit(id, input);
    setShowEdit(!showEdit);
  };

  if (showEdit) content = <BookEdit handleSubmit={handleSubmit} todo={todo} />;

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${todo.id}/300/200`} />
      <div>{content}</div>
      <div className="actions">
        <button
          className="edit"
          onClick={() => {
            setShowEdit(!showEdit);
          }}
        ></button>
        <button
          className="delete"
          onClick={() => {
            onDelete(todo.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
