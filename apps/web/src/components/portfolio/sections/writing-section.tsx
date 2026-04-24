// @ts-nocheck
import { DATA } from "../portfolio-data";

export function WritingSection() {
  return (
    <section id="writing" className="reveal">
      <div className="sec-h">
        <span className="n">06</span>
        <h2>Writing</h2>
        <div className="spacer"/>
        <span className="meta">coming soon</span>
      </div>
      <div className="writing-empty">drafting posts on multi-tenant migrations and agentic AI patterns · subscribe via <a href={"mailto:" + DATA.email} style={{ textDecoration: 'underline', textDecorationColor: 'var(--line-2)', textUnderlineOffset: 3 }}>email</a></div>
    </section>
  );
}
