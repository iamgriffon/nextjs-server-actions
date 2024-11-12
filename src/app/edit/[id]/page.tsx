import Todo from "@/components/server/Todo";
import fetchTodo from "@/lib/fetchTodo";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default async function page({ params }: Props) {
  const { id } = await params;
  const todo = await fetchTodo(id);

  if (!todo) notFound();

  return (
    <>
      <Link href="/">
        <button className="p-2 text-xl rounded-2xl text-white border-solid border-black border-2 max-w-xs bg-green-500 hover:cursor-pointer hover:bg-green-400">
          Go back
        </button>
      </Link>
      <Todo {...todo} />
    </>
  );
}
