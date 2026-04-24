// @ts-nocheck
import { DATA } from "../portfolio-data";

export function NowSection() {
  return (
    <section id="now" className="reveal">
      <div className="sec-h">
        <span className="n">05</span>
        <h2>Now</h2>
        <div className="spacer"/>
        <span className="meta">this week</span>
      </div>
      <ul className="job" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {DATA.now.map((n, i) => (
          <li key={i} style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--fg-2)', paddingLeft: 18, position: 'relative', marginBottom: 8 }}>
            <span style={{ position: 'absolute', left: 0, top: 9, width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }}/>
            {n}
          </li>
        ))}
      </ul>
    </section>
  );
}
