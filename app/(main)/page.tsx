"use client"

import About from "../components/about";
import Appbar from "../components/appbar";
import Blogs from "../components/blogs";
import Card from "../components/card";
import Contact from "../components/contact";
import Projects from "../components/projects";
export default function Home() {

  return (
    <div>
      <Appbar />

      <section id="home">
        <Card />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="blogs">
        <Blogs />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <footer className="text-white flex justify-center">
        Designed By Madhav Ganesan 2024
      </footer>

    </div>
  );
}
