"use client";

import { FC, FormEvent, useState } from "react";

interface Props {
  input: string;
  setInput: (param: string) => void;
  addTodo: (param: string) => void;
}

const AddTodoClient: FC<Props> = ({ addTodo, input, setInput }) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    addTodo(input);
  };

  const content = (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center">
      <input
        type="text"
        name="title"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="text-2xl p-1 rounded-lg flex-grow w-full"
        placeholder="New Todo (Client-side)"
        autoFocus
      />

      <button
        type="submit"
        className="p-2 text-xl rounded-2xl text-black border-solid border-black border-2 max-w-xs bg-green-500 hover:cursor-pointer hover:bg-green-400"
      >
        Submit
      </button>
    </form>
  );

  return content;
};

export default AddTodoClient
