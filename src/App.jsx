import "./App.css";
import DisabledWord from "./components/DisabledWord";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import Word from "./components/Word";

function App() {
  return (
    <div className="App min-h-screen flex flex-col text-center">
      <Header />
      <main className="flex-1">
        <Word />
        <DisabledWord />
        <Keyboard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
