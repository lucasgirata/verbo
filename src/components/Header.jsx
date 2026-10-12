import { useEffect, useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [card, setCard] = useState(false);

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
        onClick={() => setCard(!card)}
        className="bg-teal-600 dark:bg-teal-700
      border-teal-900 dark:border-teal-800 border-3 rounded
        text-sm py-2 px-3 cursor-pointer"
      >
        <i className="fa-solid fa-question text-teal-900"></i>
      </button>

      {card && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/30"
          onClick={() => setCard(false)}
        >
          <section className=" bg-teal-600 dark:bg-teal-900 text-center font-main p-6 w-180 rounded">
            <h2 className="text-teal-950 dark:text-teal-50 text-6xl font-bold mb-10 uppercase">
              Como jogar?
            </h2>
            <p className="text-teal-950 dark:text-teal-100 text-xl mb-5">
              O
              <span className="uppercase font-extrabold text-teal-900 dark:text-teal-50 mx-2">
                Verbo
              </span>
              é um jogo de adivinhação de palavras de 5 letras, onde você tem 6
              tentativas para adivinhar a palavra secreta.
            </p>
            <p className="text-teal-950 dark:text-teal-100 text-xl mx-2">
              A cada tentativa, a cor das letras indica se você está próximo(a)
              de acertar!
            </p>

            <div className="flex items-center justify-center text-center">
              <div className="h-10 w-10 mx-1 my-4 bg-tealgreen text-2xl rounded border-2 border-teal-800">
                V
              </div>
              <div className="h-10 w-10 mx-1 my-4 bg-teal-700 text-2xl rounded border-2 border-teal-800">
                E
              </div>
              <div className="h-10 w-10 mx-1 my-4 bg-teal-700 text-2xl rounded border-2 border-teal-800">
                R
              </div>
              <div className="h-10 w-10 mx-1 my-4 bg-teal-700 text-2xl rounded border-2 border-teal-800">
                B
              </div>
              <div className="h-10 w-10 mx-1 my-4 bg-teal-700 text-2xl rounded border-2 border-teal-800">
                O
              </div>
            </div>

            <p className="text-teal-950 dark:text-teal-100 text-xl my-4 flex flex-wrap items-center justify-center">
              A letra
              <div className="text-teal-950 h-8 w-8 mx-3 bg-tealgreen text-xl rounded border-2 border-teal-800">
                V
              </div>
              está na posição correta.
            </p>

            <div className="flex items-center justify-center text-center">
              <div className="h-10 w-10 mx-1 my-4 bg-teal-700 text-2xl rounded border-2 border-teal-800">
                C
              </div>
              <div className="h-10 w-10 mx-1 my-4 bg-teal-700 text-2xl rounded border-2 border-teal-800">
                O
              </div>
              <div className="h-10 w-10 mx-1 my-4 bg-goldyellow text-2xl rounded border-2 border-teal-800">
                M
              </div>
              <div className="h-10 w-10 mx-1 my-4 bg-teal-700 text-2xl rounded border-2 border-teal-800">
                E
              </div>
              <div className="h-10 w-10 mx-1 my-4 bg-teal-700 text-2xl rounded border-2 border-teal-800">
                R
              </div>
            </div>

            <p className="text-teal-950 dark:text-teal-100 text-xl my-4 flex flex-wrap items-center justify-center">
              A letra
              <div className="text-teal-950 h-8 w-8 mx-3 bg-goldyellow text-xl rounded border-2 border-teal-800">
                M
              </div>
              existe na palavra, mas está na posição incorreta.
            </p>

            <div className="flex items-center justify-center text-center">
              <div className="h-10 w-10 mx-1 my-4 bg-teal-700 text-2xl rounded border-2 border-teal-800">
                F
              </div>
              <div className="h-10 w-10 mx-1 my-4 bg-teal-700 text-2xl rounded border-2 border-teal-800">
                E
              </div>
              <div className="h-10 w-10 mx-1 my-4 bg-teal-700 text-2xl rounded border-2 border-teal-800">
                I
              </div>
              <div className="h-10 w-10 mx-1 my-4 bg-teal-700 text-2xl rounded border-2 border-teal-800">
                T
              </div>
              <div className="h-10 w-10 mx-1 my-4 bg-black/50 dark:bg-black/0.5 text-2xl rounded border-2 border-teal-800">
                O
              </div>
            </div>

            <p className="text-teal-950 dark:text-teal-100 text-xl my-4 flex flex-wrap items-center justify-center">
              A letra
              <div className="text-teal-950 h-8 w-8 mx-3 bg-black/50 dark:bg-black/0.5 text-xl rounded border-2 border-teal-800">
                O
              </div>
              não está na palavra.
            </p>

            <p className="text-teal-950 dark:text-teal-100 text-xl my-4 flex flex-wrap items-center justify-center">
              As letras podem repetir na mesma palavra, acentos e Ç são
              preenchidos automaticamente, não são opções para palpite.
            </p>

            <h2 className="text-teal-950 dark:text-teal-50 text-2xl mt-10 mb-8 font-bold uppercase">
              Boa sorte!
            </h2>
          </section>
        </div>
      )}
    </div>
  );
};

export default Header;
