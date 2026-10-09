import { useEffect, useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="inline-flex items-center justify-center">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-teal-600 dark:bg-teal-700 m-6 border-3 rounded text-sm py-2 px-3 cursor-pointer mx-20 border-teal-900 dark:border-teal-800"
      >
        <i
          className={`fa-solid ${
            darkMode ? "fa-sun" : "fa-moon"
          } text-teal-900`}
        ></i>
      </button>
      <h1 className="text-6xl font-bold text-center font-main p-20 uppercase text-teal-950 dark:text-teal-50">
        Verbo
      </h1>
      <button className="bg-teal-600 dark:bg-teal-700 m-6 border-3 rounded text-sm py-2 px-3 cursor-pointer mx-20 border-teal-900 dark:border-teal-800">
        <i className="fa-solid fa-question text-teal-900"></i>
      </button>
    </div>
  );
};

export default Header;
