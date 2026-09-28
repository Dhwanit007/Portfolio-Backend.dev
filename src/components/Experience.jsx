import { experience } from "../data";
import Reveal from "./Reveal.jsx";

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <Reveal as="p" variant="left" className="heading">
                    <div className="heading-dot" />
          EXPERIENCE
        </Reveal>
        <Reveal as="h2" delay={60}>
          Where I've worked.
        </Reveal>
        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal
              as="div"
              variant="left"
              delay={i * 90}
              className="timeline-item"
              key={job.role + job.date}
            >
              <div className="timeline-head">
                <span className="timeline-role">
                  {job.role} <span className="timeline-company">@ {job.company}</span>
                </span>
                <span className="timeline-date">{job.date}</span>
              </div>
              <ul className="timeline-points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
