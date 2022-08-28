import React from "react";
import { About } from "./components/About/About";
import { Header } from "./components/Header/Header";
import { Skills } from "./components/Skills/Skills";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
      </main>
    </div>
  );
}

export default App;
