import { profile } from "../data";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="wrap">
          <Reveal as="div" variant="scale" className="contact-panel">
            <p className="eyebrow" style={{ justifyContent: "center", display: "flex" }}>
              CONTACT
            </p>
            <h2>Let's build something reliable.</h2>
            <p>
              Open to backend and full-stack roles, freelance API work, or just a conversation
              about system design. Reach out directly — I reply fast.
            </p>
            <div className="contact-actions">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                Email Me
              </a>
              <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </Reveal>
        </div>
      </section>
      <footer className="footer">
        {profile.name} · {profile.location} · built with React + Vite
      </footer>
    </>
  );
}
