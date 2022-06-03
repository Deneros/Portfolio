import React from "react";

//Components
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      
      
      

      {/* <section className="cover">
        <Header />
      </section>
      <section>
        <Nav />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <Footer />
      </section> */}
    </>
  );
};

export default App;
