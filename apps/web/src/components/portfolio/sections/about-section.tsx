// @ts-nocheck
import { DATA } from "../portfolio-data";
import { StatIcon } from "../shared/icons";

export function AboutSection() {
  return (
    <section id="about" className="reveal">
      <div className="sec-h">
        <span className="n">01</span>
        <h2>About</h2>
        <div className="spacer"/>
        <span className="meta">the tl;dr</span>
      </div>

      <div className="stats">
        {DATA.stats.map((s, i) => (
          <div className={"stat" + (s.hero ? ' hero-stat' : '')} key={i}>
            <div className="ic"><StatIcon kind={s.ic}/></div>
            <div className="body">
              <div className="row">
                <div className="v">{s.v}<span className="u">{s.u}</span></div>
                <div className="l">{s.l}</div>
              </div>
              <div className="cap">{s.cap}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="prose">
        {DATA.about.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }}/>)}
      </div>
    </section>
  );
}
