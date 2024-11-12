"use client";

import { FaTrash } from "react-icons/fa";
import Link from "next/link";
import UpdateCheckbox from "./UpdateCheckbox";
import React, { FormEvent } from "react";

interface Props {
  todo: TodoType;
  onDelete?: (param: TodoType) => void;
}

const TodoClient: React.FC<Props> = ({ todo, onDelete }) => {
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (onDelete) onDelete(todo);
  };

  return (
    <form
      className="my-4 flex justify-between items-center"
      onSubmit={handleSubmit}
    >
      <label htmlFor="completed" className="text-2xl hover:underline">
        <Link href={`/client/edit/${todo.id}`}>{todo.title}</Link>
      </label>

      <div className="flex items-center gap-4">
        <UpdateCheckbox todo={todo} />

        <button
          type="submit"
          className="p-3 text-xl rounded-2xl text-black border-solid border-black border-2 max-w-xs bg-red-400 hover:cursor-pointer hover:bg-red-300"
        >
          <FaTrash />
        </button>
      </div>
    </form>
  );
};

export default TodoClient;
