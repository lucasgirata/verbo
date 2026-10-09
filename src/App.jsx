import { useState } from "react";
import "./App.css";
import Word from "./components/Word";

function App() {
  return (
    <div className="App bg-teal-600 text-center">
      <h1 className="text-6xl font-main font-bold p-20 uppercase text-teal-950">
        Verbo
      </h1>
      <Word />
      <Word />
      <Word />
      <Word />
      <Word />
    </div>
  );
}

export default App;
