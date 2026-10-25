import "./App.css";

import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import Projects from "./Projects";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;