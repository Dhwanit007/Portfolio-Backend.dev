import Reveal from "./Reveal.jsx";
import { projects } from "../data";

function Endpoint({ project, delay }) {
  const isPersonal = project.type === "personal";
  return (
    <Reveal as="div" variant="scale" delay={delay} className="endpoint">
      <div className="endpoint-row">
        <span className={`method method-${project.method}`}>{project.method}</span>
        <span className="endpoint-path">{project.path}</span>
        <span className={isPersonal ? "badge-personal" : "badge-confidential"}>
          {isPersonal ? "personal project" : "confidential build"}
        </span>
      </div>
      <div className="endpoint-name">{project.name}</div>
      <p className="endpoint-desc">{project.description}</p>
      <div className="endpoint-footer">
        <div className="endpoint-stack">
          {project.stack.map((tech) => (
            <span className="tag" key={tech}>
              {tech}
            </span>
          ))}
        </div>
        {isPersonal && project.url && (
          <a className="endpoint-link" href={project.url} target="_blank" rel="noreferrer">
            View on GitHub →
          </a>
        )}
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const work = projects.filter((p) => p.type === "work");
  const personal = projects.filter((p) => p.type === "personal");

  return (
    <section id="projects">
      <div className="wrap">
          <Reveal as="p" variant="left" className="heading">
            <div className="heading-dot" />
          PROJECTS
        </Reveal>
        <Reveal as="h2" delay={60}>
          Selected work.
        </Reveal>

        <p className="section-subhead">At SilverSky Technology — confidential builds</p>
        <div className="endpoint-list">
          {work.map((project, i) => (
            <Endpoint project={project} key={project.path} delay={i * 70} />
          ))}
        </div>

        <p className="section-subhead section-subhead-spaced">Personal builds — MERN stack</p>
        <div className="endpoint-list">
          {personal.map((project, i) => (
            <Endpoint project={project} key={project.path} delay={i * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}
