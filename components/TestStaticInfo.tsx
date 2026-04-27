interface TestStaticInfoSection {
  title: string;
  body: string[];
}

interface TestStaticInfoProps {
  eyebrow?: string;
  title: string;
  intro: string[];
  sections: TestStaticInfoSection[];
  closing?: string[];
}

export function TestStaticInfo({
  eyebrow = "Guide",
  title,
  intro,
  sections,
  closing,
}: TestStaticInfoProps) {
  return (
    <section className="test-static-shell">
      <div className="test-static-card">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <div className="test-static-copy">
          {intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="test-static-sections">
          {sections.map((section) => (
            <article key={section.title} className="test-static-section">
              <h3>{section.title}</h3>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>

        {closing ? (
          <div className="test-static-closing">
            {closing.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
