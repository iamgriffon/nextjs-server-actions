"use client";

import Todo from "@/components/client/Todo";
import fetchTodo from "@/lib/fetchTodo";
import { deleteTodo } from "@/services/client-side/actions";
import Link from "next/link";
import { notFound, useParams, useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";

type Props = {
  params: {
    id: string;
  };
};

const Page: FC<Props> = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState<TodoType>();

  const loadTodos = async () =>
    await fetchTodo(id as string).then((res) => {
      if (res) setTodo(res);
    });

  const onDeleteTodo = async (Todo: TodoType) => {
    await deleteTodo(Todo).then(() => loadTodos());
  };

  useEffect(() => {
    loadTodos();
  }, []);

  if (todo)
    return (
      <>
        <Link href="/client">
          <button className="p-2 text-xl rounded-2xl text-white border-solid border-black border-2 max-w-xs bg-green-500 hover:cursor-pointer hover:bg-green-400">
            Go back
          </button>
        </Link>
        <Todo todo={todo} onDelete={onDeleteTodo} />
      </>
    );
};

export default Page;
