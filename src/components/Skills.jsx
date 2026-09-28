import { skills } from "../data";
import Reveal from "./Reveal.jsx";

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
          <Reveal as="p" variant="left" className="heading">
            <div className="heading-dot" />
          SKILLS
        </Reveal>
        <Reveal as="h2" delay={60}>
          What I build with.
        </Reveal>
        <div className="skills-grid">
          {skills.map((group, gi) => (
            <Reveal
              as="div"
              variant="up"
              delay={gi * 70}
              className="skill-group"
              key={group.group}
            >
              <h3>{group.group}</h3>
              <div className="skill-tags">
                {group.items.map((item, ii) => (
                  <span
                    className="skill-tag"
                    key={item}
                    style={{ transitionDelay: `${gi * 60 + ii * 30}ms` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
