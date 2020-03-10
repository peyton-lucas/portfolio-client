import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Journey from "../components/Journey";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import "../styles.scss";

export default function Lander() {
  return (
    <div className="hero">
      <Hero />
      <About />
      {/*<Journey />*/}
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}