import React, { useEffect, useState } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

const NavBar = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const loadTheme = () => {
      const savedTheme = localStorage.getItem("Theme") || "light";
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      setTheme(savedTheme);
    };

    loadTheme();
  }, []);

  const handleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("Theme", newTheme);
  };

  return (
    <div className="bg-blue-500 p-3 w-full flex flex-row justify-between items-center">
      <h1 className="text-2xl text-white">Taskify Web</h1>
      <button
        className="border-2 p-2 rounded-full border-white"
        onClick={handleTheme}
      >
        {theme === "light" ? (
          <IoMdMoon size={25} color="white" />
        ) : (
          <IoMdSunny size={25} color="white" />
        )}
      </button>
    </div>
  );
};

export default NavBar;
