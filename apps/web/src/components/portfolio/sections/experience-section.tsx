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
            <div className="co"><a href={j.url} target="_blank" rel="noreferrer">{j.co} ↗</a></div>
            <div className="when">{j.when}</div>
          </div>
          {j.roles ? (
            <div className="role-timeline">
              {j.roles.map((r, k) => (
                <div className="role-step" key={k}>
                  <div className="role-dot" aria-hidden="true"/>
                  <div className="role-body">
                    <div className="role-title">{r.title}
                      {r.note && <span className="role-note">{r.note}</span>}
                    </div>
                    <div className="role-span">{r.span}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="role">{j.role}</p>
          )}
          <ul>
            {j.bullets.map((b, k) => <li key={k} dangerouslySetInnerHTML={{ __html: b }}/>)}
          </ul>
        </div>
      ))}
    </section>
  );
}
