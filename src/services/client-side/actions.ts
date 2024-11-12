export async function addTodo(title: string) {
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
  }).then(async (res) => {
    if (res) console.log("client-side add", await res.json());
  });
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
  });

  if (res) console.log("client-side delete", await res.json());

  return res;
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
  });

  if (res) console.log("client-side update", await res.json());

  return res;
}
