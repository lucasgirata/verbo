import { useRef, useEffect } from "react";

const Word = () => {
  const inputsRef = useRef([]);

  useEffect(() => {
    inputsRef.current[0]?.focus();
  });

  const handleKeyDown = (e, index) => {
    let nextIndex = index;

    if (e.key === "ArrowLeft") {
      nextIndex--;
    } else if (e.key === "ArrowRight") {
      nextIndex++;
    } else {
      return;
    }

    if (nextIndex >= 0 && nextIndex < 5) {
      e.preventDefault();
      inputsRef.current[nextIndex]?.focus();
    }
  };

  return (
    <form className="flex items-center justify-center">
      {[1, 2, 3, 4, 5].map((num, index) => (
        <input
          ref={(element) => (inputsRef.current[index] = element)}
          onKeyDown={(event) => handleKeyDown(event, index)}
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
