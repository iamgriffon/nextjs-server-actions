"use client";

import AddTodo from "@/components/client/AddTodo";
import TodoList from "@/components/client/TodoList";
import { addTodo, deleteTodo } from "@/services/client-side/actions";
import fetchTodos from "@/services/common/fetchTodos";
import { useState } from "react";

export default function Home() {
  const [todosList, setTodos] = useState<TodoType[]>([]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const loadTodos = async () => {
    const fetchedTodos = await fetchTodos();
    if (fetchedTodos) setTodos(fetchedTodos);
    setLoading(false);
  };

  const onAddTodo = async (text: string) => {
    await addTodo(text).then(() => loadTodos())
  };

  const onDeleteTodo = async (Todo: TodoType) => {
    await deleteTodo(Todo).then(() => loadTodos());
  };

  return (
    <>
      <AddTodo addTodo={onAddTodo} input={input} setInput={setInput} />
      <TodoList loadTodos={loadTodos} todosList={todosList} loading={loading} deleteTodo={onDeleteTodo} />
    </>
  );
}
