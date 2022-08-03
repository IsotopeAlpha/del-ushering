import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <head>
        <title>Dels Ushering Consult</title>
      </head>
      <Navbar />
      <main>
        <Home />
        <Services />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
