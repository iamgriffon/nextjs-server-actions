"use client";

import { FC, useEffect, useState } from "react";
import Todo from "./Todo";

interface Props {
  todosList: TodoType[];
  loadTodos: () => void;
  deleteTodo: (param: TodoType) => void;
  loading: boolean;
}

const TodoListClient: FC<Props> = ({
  todosList,
  loadTodos,
  loading,
  deleteTodo,
}) => {
  useEffect(() => {
    loadTodos();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!todosList || todosList.length === 0) {
    return <p>No Todos Available</p>;
  }

  const sortedTodos = [...todosList].reverse();

  return (
    <>
      {sortedTodos.map((todo) => (
        <Todo key={todo.id} todo={todo} onDelete={deleteTodo} />
      ))}
    </>
  );
};

export default TodoListClient;
