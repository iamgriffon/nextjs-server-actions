import TodoList from "../components/server/TodoList"
import AddTodo from "../components/server/AddTodo"

export default function Home() {
  return (
    <>
      <AddTodo />
      <TodoList />
    </>
  )
}
