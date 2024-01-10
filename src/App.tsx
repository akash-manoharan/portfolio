import React from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

const App: React.FC = () => (
  <div className="App">
    <Header />
    <Skills />
    <Projects />
    <Contact />
  </div>
);

export default App;
