"use server";

import { revalidatePath } from "next/cache";

export async function addTodo(data: FormData) {
  const title = data.get("title");

  await fetch("http://localhost:3500/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: 1,
      title,
      completed: false,
    }),
  }).finally(() => console.log("server-side add"));

  revalidatePath("/");
}

export async function deleteTodo(todo: TodoType) {
  const res = await fetch(`http://localhost:3500/todos/${todo.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: todo.id,
    }),
  }).finally(() => console.log("server-side delete"));
  revalidatePath("/");
  await res.json();
}

export async function updateTodo(todo: TodoType) {
  const res = await fetch(`http://localhost:3500/todos/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...todo,
      completed: !todo.completed,
    }),
  }).finally(() => console.log("server-side update"));
  await res.json();
  revalidatePath("/");
}
