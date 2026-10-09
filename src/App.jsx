import "./App.css";
import DisabledWord from "./components/DisabledWord";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Word from "./components/Word";

function App() {
  return (
    <div className="App min-h-screen flex flex-col text-center">
      <Header />
      <main className="flex-1">
        <Word />
        <DisabledWord />
      </main>

      <Footer />
    </div>
  );
}

export default App;
