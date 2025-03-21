import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import Technology from "./components/Technology";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selected:bg-cyan-300 selected:text-neutral-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8 ">
        <NavBar />
        <Hero />
        <About />
        <Technology />
        <Experience />
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default App;
