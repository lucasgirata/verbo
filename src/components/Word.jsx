const Word = () => {
  return (
    <form className="flex items-center justify-center">
      {[1, 2, 3, 4, 5].map((num) => (
        <input
          key={num}
          type="text"
          maxLength={1}
          className="h-15 w-15 bg-teal-600 dark:bg-teal-700 text-center uppercase font-main rounded m-0.5 text-xl text-teal-950 dark:text-teal-50 cursor-pointer border-6 border-teal-900 dark:border-teal-800 focus:border-b-8 focus:outline-0 font-bold caret-transparent"
        />
      ))}
    </form>
  );
};

export default Word;
