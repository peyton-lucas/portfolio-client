import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import "../styles.scss";

export default function Lander() {
  return (
    <div className="hero">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}