import { useEffect, useState } from "react";
import { profile } from "../data";
import useCountUp from "../hooks/useCountUp";

const RESPONSE_LINES = [
  { key: "name", value: profile.name },
  { key: "role", value: profile.role },
  { key: "location", value: profile.location },
  { key: "stack", value: `[${profile.stack.map((s) => `"${s}"`).join(", ")}]`, raw: true },
  { key: "status", value: profile.status },
];

const SPECIALTIES = [
  "RESTful APIs",
  "auth & authorization",
  "database design",
  "cloud deployment",
  "backend architecture",
];

const STATS = [
  { label: "years writing backend code", target: 2 },
  { label: "production projects shipped", target: 7 },
  // { label: "companies worked with", target: 4 },
];

function useTypewriter(words, { typeSpeed = 65, deleteSpeed = 35, hold = 1400 } = {}) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), hold);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timeout = setTimeout(() => {
        const next = deleting
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1);
        setText(next);
      }, deleting ? deleteSpeed : typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, hold]);

  return text;
}

function Stat({ label, target }) {
  const value = useCountUp(target, { start: true, duration: 1400 });
  return (
    <div className="stat">
      <span className="stat-value">{value}+</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showCursorLine, setShowCursorLine] = useState(true);
  const typed = useTypewriter(SPECIALTIES);

  useEffect(() => {
    if (visibleLines >= RESPONSE_LINES.length) return;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 220);
    return () => clearTimeout(t);
  }, [visibleLines]);

  useEffect(() => {
    if (visibleLines >= RESPONSE_LINES.length) {
      const t = setTimeout(() => setShowCursorLine(false), 400);
      return () => clearTimeout(t);
    }
  }, [visibleLines]);

  return (
    <section id="top" className="hero">
      <div className="ambient-orb ambient-orb-hero" aria-hidden="true" />
      <div className="wrap">
        <div>
          {/* <span className="hero-status">
            <span className="dot" />
            Available For Backend Roles
          </span> */}
          <h1>
            Backend developer
            <br />
            shipping <em>reliable systems.</em>
          </h1>
          <p className="hero-typewriter">
            <span className="mono">Building</span>{" "}
            <span className="typewriter-text">{typed}</span>
            <span className="cursor cursor-inline" />
          </p>
          <p className="hero-lede">{profile.summary}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Get in touch
            </a>
            <a className="btn btn-ghost" href="#projects">
              View projects
            </a>
          </div>
          <div className="hero-meta">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              github.com/Dhwanit007
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              linkedin
            </a>
          </div>

          <div className="stat-row">
            {STATS.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
        </div>

        <div className="terminal terminal-float" aria-hidden="true">
          <div className="terminal-bar">
            <span className="terminal-dot r" />
            <span className="terminal-dot y" />
            <span className="terminal-dot g" />
            <span className="terminal-title">zsh — api.dhwanit.dev</span>
          </div>
          <div className="terminal-body">
            <div>
              <span className="terminal-prompt">$</span>{" "}
              <span className="terminal-cmd">curl -s /api/dhwanit | jq</span>
            </div>
            <div style={{ marginTop: 14 }}>
              <span className="terminal-punc">{"{"}</span>
              {RESPONSE_LINES.slice(0, visibleLines).map((line, i) => (
                <div key={line.key} style={{ paddingLeft: 18 }}>
                  <span className="terminal-key">"{line.key}"</span>
                  <span className="terminal-punc">: </span>
                  {line.raw ? (
                    <span className="terminal-value">{line.value}</span>
                  ) : (
                    <span className="terminal-string">"{line.value}"</span>
                  )}
                  {i < visibleLines - 1 && <span className="terminal-punc">,</span>}
                </div>
              ))}
              {visibleLines >= RESPONSE_LINES.length && (
                <span className="terminal-punc">{"}"}</span>
              )}
              {showCursorLine && <span className="cursor" />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
