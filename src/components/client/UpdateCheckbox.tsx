"use client";

import { useFormStatus } from "react-dom";
import { useOptimistic, useState } from "react";
import { updateTodo } from "@/services/client-side/actions";

export default function UpdateCheckbox({ todo }: { todo: TodoType }) {
  const { pending } = useFormStatus();
  const [optimisticTodo] = useOptimistic(
    todo,
    (state: TodoType, completed: boolean) => ({ ...state, completed })
  );

  const [checked, setChecked] = useState(() => todo.completed)

  return (
    <input
      type="checkbox"
      checked={checked}
      id="completed"
      name="completed"
      onChange={async () => {
        await updateTodo(todo).then(() => setChecked(prev => !prev));
      }}
      disabled={pending}
      className="min-w-[2rem] min-h-[2rem]"
    />
  );
}
