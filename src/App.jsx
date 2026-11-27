import { useEffect, useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Background from "./components/Background.jsx";
import CursorGlow from "./components/CursorGlow.jsx";
import BackToTop from "./components/BackToTop.jsx";
import { education, experience, profile, projects, skills } from "./data.js";
import { fetchPortfolioContent } from "./portfolioContent.js";

export default function App() {
  const [content, setContent] = useState({
    profile,
    experience,
    projects,
    skills,
    education,
  });

  useEffect(() => {
    fetchPortfolioContent()
      .then((databaseContent) => {
        if (databaseContent) setContent(databaseContent);
      })
      .catch((error) => {
        console.error("Could not load portfolio content from Supabase.", error);
      });
  }, []);

  return (
    <>
      <Background />
      <CursorGlow />
      <Nav profile={content.profile} />
      <Hero profile={content.profile} />
      <About profile={content.profile} />
      <Experience experience={content.experience} />
      <Projects projects={content.projects} />
      <Skills skills={content.skills} />
      <Education education={content.education} />
      <Contact profile={content.profile} />
      <BackToTop />
    </>
  );
}
