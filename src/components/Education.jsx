import { education } from "../data";
import Reveal from "./Reveal.jsx";

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
          <Reveal as="p" variant="left" className="heading">
            <div className="heading-dot" />
          EDUCATION
        </Reveal>
        <Reveal as="h2" delay={60}>
          Academic background.
        </Reveal>
        <div className="edu-list">
          {education.map((edu, i) => (
            <Reveal
              as="div"
              variant="up"
              delay={i * 80}
              className="edu-row"
              key={edu.school + edu.date}
            >
              <div>
                <div className="edu-school">{edu.school}</div>
                <div className="edu-program">{edu.program}</div>
              </div>
              <div className="edu-date">{edu.date}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
