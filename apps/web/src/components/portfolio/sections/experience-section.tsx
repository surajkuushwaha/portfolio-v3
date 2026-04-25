// @ts-nocheck
import { DATA } from "../portfolio-data";

export function ExperienceSection() {
  return (
    <section id="experience" className="reveal">
      <div className="sec-h">
        <span className="n">03</span>
        <h2>Work</h2>
        <div className="spacer"/>
        <span className="meta">4+ years</span>
      </div>
      {DATA.jobs.map((j, i) => (
        <div className="job" key={i}>
          <div className="job-h">
            <div className="co">
              <a href={j.url} target="_blank" rel="noreferrer">{j.co} ↗</a>
              {j.role && <span className="job-title">{j.role}</span>}
            </div>
            <div className="when">{j.when}</div>
          </div>
          {j.intro && <p className="job-intro" dangerouslySetInnerHTML={{ __html: j.intro }}/>}
          {j.journey ? (
            <div className="journey">
              {j.journey.map((step, k) => (
                <div className={"chapter " + (step.status === "leading" ? "is-current" : "")} key={k}>
                  <div className="chapter-rail" aria-hidden="true">
                    <div className="chapter-num">{step.chapter}</div>
                  </div>
                  <div className="chapter-body">
                    <div className="chapter-h">
                      <h3 className="chapter-title">{step.title}</h3>
                      <span className="chapter-tenure">{step.tenure}</span>
                    </div>
                    <div className="chapter-meta">{step.span}</div>
                    <p className="chapter-arc">→ {step.arc}</p>
                    {step.note && <p className="chapter-note">{step.note}</p>}
                    <div className="chapter-cols">
                      <div className="chapter-col">
                        <div className="col-label"><span className="dot ship"/>shipped</div>
                        <ul className="col-list">
                          {step.shipped.map((b, x) => <li key={x} dangerouslySetInnerHTML={{ __html: b }}/>)}
                        </ul>
                      </div>
                      <div className="chapter-col">
                        <div className="col-label"><span className="dot learn"/>learned</div>
                        <ul className="col-list quote">
                          {step.learned.map((b, x) => <li key={x}>“{b}”</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {j.role && <p className="role">{j.role}</p>}
              {j.bullets && (
                <ul>
                  {j.bullets.map((b, k) => <li key={k} dangerouslySetInnerHTML={{ __html: b }}/>)}
                </ul>
              )}
            </>
          )}
        </div>
      ))}
    </section>
  );
}
