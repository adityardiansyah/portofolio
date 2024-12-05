import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Project from './components/Project';
import Footer from './components/Footer';
import { animate, scroll } from "motion";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
