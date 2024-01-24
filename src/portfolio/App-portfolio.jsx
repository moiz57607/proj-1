import React from "react";
import First from "./first";
import Experiences from "./experiences";
import About from "./About";
import Skills from "./skills";
import Services from "./services";
import Projects from "./projects";
import Component from "./footer";
function Wpp() {
  return (
    <>
      <First />
      {/* <About /> */}
      <Skills />
      <Experiences />
      <Services />
      <Projects />
      <Component />
    </>
  );
}

export default Wpp;
