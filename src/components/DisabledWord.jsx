const DisabledWord = () => {
  return (
    <form className="flex flex-col items-center justify-center">
      {[1, 2, 3, 4, 5].map((line) => (
        <div key={line} className="flex">
          {[1, 2, 3, 4, 5].map((num) => (
            <input
              key={num}
              type="text"
              disabled
              className="h-15 w-15 bg-teal-650 text-center uppercase font-main rounded m-0.5 text-xl text-teal-950 cursor-default dark:bg-teal-800"
            />
          ))}
        </div>
      ))}
    </form>
  );
};

export default DisabledWord;
