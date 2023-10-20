import React from "react";
import BookShow from "./BookShow";

const BookList = ({ todos, onDelete, onEdit }) => {
  const renderedTodos = todos.map((todo) => {
    return (
      <BookShow onEdit={onEdit} onDelete={onDelete} key={todo.id} todo={todo} />
    );
  });
  console.log(todos);
  return <div className="book-list">{renderedTodos}</div>;
};

export default BookList;
