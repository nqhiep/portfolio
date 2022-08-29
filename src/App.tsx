import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Experiences } from "./components/Experience/Experience";
import { ScrollUp } from "./components/ScrollUp/ScrollUp";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <Skills />
        <Projects />
        <Experiences />
        <Contact />
        <Footer />
        <ScrollUp />
      </main>
    </div>
  );
}

export default App;
