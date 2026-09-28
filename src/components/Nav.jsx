import { useEffect, useState } from "react";
import { profile } from "../data";

const links = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Contact", "contact"],
];

export default function Nav() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrollable = h.scrollHeight - h.clientHeight;
      setProgress(scrollable > 0 ? (h.scrollTop / scrollable) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map(([, id]) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="nav">
      <div className="nav-progress" style={{ width: `${progress}%` }} />
      <div className="wrap">
        <a href="#top" className="nav-logo">
          Dhwanit<span>.dev</span>
        </a>
        <ul className="nav-links">
          {links.map(([label, id]) => (
            <li key={id}>
              <a href={`#${id}`} className={active === id ? "is-active" : ""}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a className="nav-cta" href={profile.resumeUrl} download="Dhwanit-Parani-Resume.pdf">
          Resume
          <svg
            className="nav-cta-icon"
            viewBox="0 0 26 26"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M12 3v11m0 0 4-4m-4 4-4-4M5 18v2h14v-2" />
          </svg>
        </a>
      </div>
    </header>
  );
}
