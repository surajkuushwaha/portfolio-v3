// @ts-nocheck
import { DATA } from "../portfolio-data";
import "@/styles/portfolio/portfolio-sections-shared.css";
import "@/styles/portfolio/portfolio-projects.css";

export function ProjectsSection() {
  return (
    <section id="projects" className="reveal">
      <div className="sec-h">
        <span className="n">04</span>
        <h2>Projects</h2>
        <div className="spacer"/>
        <span className="meta">things I shipped</span>
      </div>
      <div className="projects">
        {DATA.projects.map((p, i) => (
          <div className="project" key={i}>
            <div>
              <div className="p-h">
                <h3><a href={p.url} target="_blank" rel="noreferrer">{p.name}</a></h3>
                <span className="date">{p.when}</span>
              </div>
              <p className="desc">{p.desc}</p>
              <div className="stack">
                {p.stack.map(s => <span key={s}>{s}</span>)}
              </div>
            </div>
            <div className="aside">
              {p.status === 'active' ? '● active' : '○ shipped'}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
