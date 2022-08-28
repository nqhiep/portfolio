import React from "react";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
      </main>
    </div>
  );
}

export default App;
