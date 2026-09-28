import { profile } from "../data";
import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <section id="about">
      <div className="wrap about-grid">
        <div>
          <Reveal as="p" variant="left" className="heading">
            <div className="heading-dot" />
            ABOUT
          </Reveal>
          <Reveal as="h2" variant="left" delay={60}>
            Backend-first, product-minded.
          </Reveal>
          <Reveal as="p" variant="left" delay={120} className="about-lede">
            I'm a final-year CSE student working as a <em>Jr. Backend Developer at SilverSky
            Technology.</em> Most of my time goes into designing schemas, writing APIs that don't
            fall over in production, and closing the gap between "<i><b>it works on my machine</b></i>" and
            "<i><b>it's deployed.</b></i>" I care about clean auth flows, sensible database design, and code a
            teammate can pick up without a walkthrough.
          </Reveal>
          <Reveal as="ul" variant="left" delay={180} className="about-fact-list">
            <li>
              <dt>Currently</dt>
              <dd>Jr. Backend Developer @ SilverSky Technology</dd>
            </li>
            <li>
              <dt>Focus</dt>
              <dd>NestJS · Laravel · PostgreSQL · REST APIs</dd>
            </li>
            <li>
              <dt>Studying</dt>
              <dd>B.Tech CSE, Silver Oak University (2024 — Present)</dd>
            </li>
            <li>
              <dt>Based in</dt>
              <dd>{profile.location}</dd>
            </li>
          </Reveal>
        </div>

        <Reveal as="div" variant="scale" delay={100} className="avatar-card">
          {/* <div className="avatar-frame"> */}
            {/* <svg
              viewBox="0 0 320 320"
              width="100%"
              height="100%"
              role="img"
              aria-label="Placeholder avatar for Dhwanit Parani"
            >
              <rect width="320" height="320" fill="#101e29" />
              <rect width="320" height="320" fill="url(#grid)" opacity="0.5" />
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M20 0H0V20" fill="none" stroke="#22333f" strokeWidth="1" />
                </pattern>
              </defs>
              <circle cx="160" cy="160" r="92" fill="none" stroke="#f2a65a" strokeWidth="1.5" />
              <text
                x="160"
                y="182"
                textAnchor="middle"
                fontFamily="'Space Grotesk', sans-serif"
                fontSize="72"
                fontWeight="600"
                fill="#e7ecef"
              >
                DP
              </text>
            </svg> */}
            <div className="avatar-frame">
              <img src={`${import.meta.env.BASE_URL}img.jpg`} alt="Dhwanit Parani" />
            </div>
          {/* </div> */}
          <div className="avatar-caption">
            {/* <span>avatar.svg</span>
            <span>placeholder — swap for a photo</span> */}
            <span>Dhwanit Parani</span>
            <em><span>Jr. Backend Developer</span></em>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
