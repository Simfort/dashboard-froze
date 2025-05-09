"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function getPathName(pathName: string) {
  if (pathName == "/") {
    return "Home";
  } else if (pathName.startsWith("/register")) {
    return "Register";
  } else if (pathName.startsWith("/Grand")) {
    return "Grand";
  }
}

export default function AsideNav() {
  const path = usePathname();
  const [localstorage, setStorage] = useState<Storage>();
  const pathName = getPathName(path);

  useEffect(() => {
    if (window.localStorage != null) {
      setStorage(localStorage);
    }
  }, []);
  return (
    <aside className="h-screen shadow-2xl rounded-tr-3xl fixed   min-w-[250px] items-center flex flex-col   text-white">
      <h1 className=" border-b-4 w-1/1 text-center bg-sky-600 text-sky-100 rounded-tr-3xl">
        {pathName}
      </h1>
      <nav className="flex flex-col p-5 text-2xl gap-7">
        <Link
          className="hover:opacity-45 border-2 border-sky-200 text-center p-2 rounded-2xl w-[200px]"
          href="/">
          Home
        </Link>
        <Link
          className="hover:opacity-45 border-2 border-sky-200 text-center p-2 rounded-2xl w-[200px]"
          href="/grand">
          Grand
        </Link>
        {!localstorage?.getItem("user") && (
          <Link
            className="hover:opacity-45 border-2 border-sky-200 text-center p-2 rounded-2xl w-[200px]"
            href="/register">
            Register
          </Link>
        )}
      </nav>
    </aside>
  );
}
