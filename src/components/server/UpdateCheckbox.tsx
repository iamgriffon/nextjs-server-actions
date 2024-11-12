"use client";

import { updateTodo } from "@/services/server-side/actions";
import { useFormStatus } from "react-dom";
import { startTransition, useOptimistic } from "react";

export default function UpdateCheckbox({ todo }: { todo: TodoType }) {
  const { pending } = useFormStatus();
  const [optimisticTodo, addOptimisticTodo] = useOptimistic(
    todo,
    (state: TodoType, completed: boolean) => ({ ...state, completed })
  );

  return (
    <input
      type="checkbox"
      checked={optimisticTodo.completed}
      id="completed"
      name="completed"
      onChange={() => startTransition(() => updateTodo(todo))}
      disabled={pending}
      className="min-w-[2rem] min-h-[2rem]"
    />
  );
}
