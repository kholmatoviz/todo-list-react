import React, { useRef } from "react";
import { IoMoon } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";

function Navbar() {
  const themeRef = useRef(localStorage.getItem("theme") || "light");
  document.documentElement.setAttribute("data-theme", themeRef.current);

  const handleChange = () => {
    themeRef.current = themeRef.current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", themeRef.current);
    localStorage.setItem("theme", themeRef.current);
  };

  return (
    <div className="navbar  bg-base-100 shadow-sm">
      <div className="flex container items-center justify-between">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">To Do List</a>
        </div>
        <label className="flex text-xl items-center cursor-pointer gap-2">
          <IoIosSunny className="text-[27px]" />
          <input
            defaultChecked={themeRef.current == "light" ? false : true}
            onChange={handleChange}
            type="checkbox"
            value="dark"
            className="toggle theme-controller"
          />
          <IoMoon />
        </label>
      </div>
    </div>
  );
}

export default Navbar;
