import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Work from "./Components/Work";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Skills />
      <About />
      <Work />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
