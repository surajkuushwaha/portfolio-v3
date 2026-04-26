// @ts-nocheck
import { DATA } from "../portfolio-data";
import { SkillIcon } from "../shared/icons";
import "@/styles/portfolio/portfolio-sections-shared.css";
import "@/styles/portfolio/portfolio-skills.css";

export function SkillsSection() {
  return (
    <section id="skills" className="reveal">
      <div className="sec-h">
        <span className="n">02</span>
        <h2>Skills</h2>
        <div className="spacer"/>
        <span className="meta">tools I reach for</span>
      </div>
      <div className="skills">
        {DATA.skills.map((s, idx) => (
          <div className={"skill-card" + (idx === 0 ? ' wide' : '')} key={s.cat}>
            <div className="skill-head">
              <div className="skill-ic"><SkillIcon kind={s.ic}/></div>
              <div className="skill-title">
                <div className="t">{s.cat}</div>
                <div className="h">{s.human}</div>
              </div>
              <div className="skill-yrs"><b>{s.years}</b></div>
            </div>
            <div className="skill-tags">
              {s.items.map(it => (
                <span key={it} className={s.star && s.star.includes(it) ? 'star' : ''}>{it}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
