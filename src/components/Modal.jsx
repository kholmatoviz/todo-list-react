import React from "react";
import toast from "react-hot-toast";
import { IoClose } from "react-icons/io5";

function Modal({ setShowModal, todos, itemId, setTodos }) {
  const activeTodoText = todos.find((todo) => todo.id === itemId).text;
  const changeShowModal = function () {
    setShowModal(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (formData.get("todo-text ") != activeTodoText) {
      setTodos((prev) => {
        const newTodos = prev.map((todo) => {
          return itemId == todo.id
            ? { ...todo, text: formData.get("todo-text") }
            : { ...todo };
        });
        localStorage.setItem("todos", JSON.stringify(newTodos));
        return newTodos;
      });
      toast.success("Muvaffaqiyatli yangilandi!");
    }
    setShowModal(false);
  };
  return (
    <div className="w-screen h-screen absolute top-0 left-0 bg-[#000a]">
      <div className="w-full flex flex-col absolute left-1/2 top-1/2 -translate-1/2 max-w-[500px] bg-white rounded-md px-8 py-8 ">
        <button
          className="flex ml-auto text-white cursor-pointer px-1 py-1 bg-red-600 rounded-full"
          onClick={changeShowModal}
          type="button"
        >
          <IoClose />
        </button>
        <div className="flex justify-center items-center w-full mt-6">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col text-black w-full max-w-md gap-2"
          >
            <input
              type="text"
              name="todo-text"
              autoComplete="off"
              placeholder="Edit text..."
              className="border border-gray-400 rounded-[5px] px-4 py-2"
              defaultValue={activeTodoText}
            />
            <button className="btn btn-active btn-primary font-bold text-[15px] tracking-[1px]">
              Edit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
