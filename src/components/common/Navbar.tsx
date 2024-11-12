"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();

  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="max-w-xl mx-auto sm:px-4 flex justify-between">
        <h1 className="text-3xl flex items-center w-full justify-between gap-1 font-bold mb-0">
          <Link
            href="/"
            className={cn(
              "text-white/90 no-underline hover:text-cyan-500",
              !pathName.includes("/client") && "underline"
            )}
          >
            Server
          </Link>
          <Link
            href="/client"
            className={cn(
              "text-white/90 no-underline hover:text-cyan-500",
              pathName.includes("/client") && "underline"
            )}
          >
            Client
          </Link>
        </h1>
      </div>
    </nav>
  );
}
