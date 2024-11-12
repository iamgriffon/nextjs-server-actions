export default async function fetchTodos() {
  try {
    const res = await fetch("http://localhost:3500/todos");

    const todos: TodoType[] = await res.json();

    return todos;
  } catch (err) {
    if (err instanceof Error) console.log(err.stack);
  }
}
