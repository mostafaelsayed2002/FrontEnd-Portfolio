import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-white px-[20px] md:px-[90px]">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
