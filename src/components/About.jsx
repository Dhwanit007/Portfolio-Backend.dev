import Reveal from "./Reveal.jsx";

function renderQuoteEmphasis(text) {
  return text.split(/("[^"]+")/g).map((part, index) => {
    if (!part.startsWith('"') || !part.endsWith('"')) return part;

    return (
      <span key={index}>
        "{<i><b>{part.slice(1, -1)}</b></i>}"
      </span>
    );
  });
}

export default function About({ profile }) {
  const position = profile.currentPosition.replace(" @ ", " at ");
  const positionPhrase = profile.about.includes(`${position}.`) ? `${position}.` : position;
  const positionIndex = profile.about.indexOf(positionPhrase);
  const aboutText =
    positionIndex === -1 ? (
      renderQuoteEmphasis(profile.about)
    ) : (
      <>
        {renderQuoteEmphasis(profile.about.slice(0, positionIndex))}
        <em>{positionPhrase}</em>
        {renderQuoteEmphasis(profile.about.slice(positionIndex + positionPhrase.length))}
      </>
    );

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
            {aboutText}
          </Reveal>
          <Reveal as="ul" variant="left" delay={180} className="about-fact-list">
            <li>
              <dt>Currently</dt>
              <dd>{profile.currentPosition}</dd>
            </li>
            <li>
              <dt>Focus</dt>
              <dd>{profile.focus}</dd>
            </li>
            <li>
              <dt>Studying</dt>
              <dd>{profile.studying}</dd>
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
