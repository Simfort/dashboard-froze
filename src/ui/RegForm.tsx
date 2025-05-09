"use client";

import createUser from "@/lib/createUser";
import { useActionState, useEffect } from "react";

export default function RegForm() {
  const [state, userAction] = useActionState(createUser, {
    errors: [],
    name: "",
  });
  useEffect(() => {
    if (state.errors[0] == "Succesfully" && state.name) {
      localStorage.setItem("user", state.name);
    }
  }, [state]);
  return (
    <form
      className=" flex flex-col p-10 gap-7 min-h-[500px] w-1/3 rounded-2xl shadow-2xl text-xl bg-white"
      action={userAction}>
      <h2 className=" text-center">Register</h2>
      <div className="flex flex-col">
        <label className=" font-bold" htmlFor="name">
          Name
        </label>
        <input
          className=" border-2 border-sky-400 rounded-[10px] p-1"
          type="text"
          name="name"
          required
        />
      </div>
      <div className="flex flex-col">
        <label className=" font-bold" htmlFor="password">
          Password
        </label>
        <input
          className=" border-2 border-sky-400 rounded-[10px] p-1"
          type="password"
          name="password"
          required
        />
      </div>
      <div className="flex flex-col">
        <label className=" font-bold" htmlFor="email">
          Email
        </label>
        <input
          className=" border-2 border-sky-400 rounded-[10px]  p-1"
          type="email"
          name="email"
          required
        />
      </div>
      <div className="h-1/4">
        <ul>
          {state.errors[0] == "Succesfully" ? (
            <li className="text-green-400">Succesfully</li>
          ) : (
            state.errors.map((val, i) => (
              <li className="text-red-400" key={i}>
                {val}
              </li>
            ))
          )}
        </ul>
      </div>
      <button
        type="submit"
        className="bg-sky-400 text-white rounded-[10px]  p-2">
        Submit
      </button>
    </form>
  );
}
