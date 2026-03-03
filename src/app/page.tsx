import React from "react";
import Scene from "@/components/canvas/Scene";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Certificates from "@/components/sections/Certificates";
import FutureLabs from "@/components/sections/FutureLabs";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      <Scene />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <FutureLabs />
      <Contact />
    </main>
  );
}
