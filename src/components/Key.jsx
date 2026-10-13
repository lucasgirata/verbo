const Key = ({ value, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`h-15 ${className || "w-15"} bg-teal-600 dark:bg-teal-800 text-2xl rounded border-2 border-teal-800 dark:border-teal-900 cursor-pointer font-bold text-teal-950 dark:text-teal-50`}
    >
      {value}
    </button>
  );
};

export default Key;
