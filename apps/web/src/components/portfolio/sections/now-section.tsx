// @ts-nocheck
import { DATA } from "../portfolio-data";
import "@/styles/portfolio/portfolio-sections-shared.css";
import "@/styles/portfolio/portfolio-now.css";

export function NowSection() {
  return (
    <section id="now" className="reveal">
      <div className="sec-h">
        <span className="n">05</span>
        <h2>Now</h2>
        <div className="spacer"/>
        <span className="meta">this week</span>
      </div>
      <ul className="now-list">
        {DATA.now.map((n, i) => (
          <li key={i} className="now-item">
            <span className="now-item-dot"/>
            {n}
          </li>
        ))}
      </ul>
    </section>
  );
}
