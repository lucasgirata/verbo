import { useEffect, useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="flex items-center justify-center my-10 gap-8 md:gap-20">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-teal-600 dark:bg-teal-700
      border-teal-900 dark:border-teal-800 border-3 rounded
        text-sm py-2 px-3 cursor-pointer"
      >
        <i
          className={`fa-solid ${
            darkMode ? "fa-sun" : "fa-moon"
          } text-teal-900`}
        ></i>
      </button>
      <h1 className="text-teal-950 dark:text-teal-50 text-6xl text-center font-bold font-main uppercase">
        Verbo
      </h1>
      <button
        className="bg-teal-600 dark:bg-teal-700
      border-teal-900 dark:border-teal-800 border-3 rounded
        text-sm py-2 px-3 cursor-pointer"
      >
        <i className="fa-solid fa-question text-teal-900"></i>
      </button>
    </div>
  );
};

export default Header;
