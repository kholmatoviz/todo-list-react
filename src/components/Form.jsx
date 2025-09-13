import React from "react";
import toast from "react-hot-toast";

import { v4 as uuidv4 } from "uuid";

function Form({ setTodos }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const todo = {
      id: uuidv4(),
      isComleted: false,
    };

    const formData = new FormData(e.target);

    todo.text = formData.get("todo-text");

    if (todo.text.trim()) {
      setTodos((prev) => {
        localStorage.setItem("todos", JSON.stringify([todo, ...prev]));
        return [todo, ...prev];
      });

      toast.success("Yangi todo qo'shildi!");
    } else {
      toast.error("Iltimos, maydonni bo‘sh qoldirmang!");
    }
    e.target.reset();
  };
  return (
    <div className="flex justify-center items-center w-full mt-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-md gap-2"
      >
        <input
          type="text"
          name="todo-text"
          autoComplete="off"
          placeholder="Type to do text..."
          className="border border-gray-400 rounded-[5px] px-4 py-2"
        />
        <button className="btn btn-active btn-primary font-bold text-[15px] tracking-[1px]">
          Create
        </button>
      </form>
    </div>
  );
}

export default Form;
