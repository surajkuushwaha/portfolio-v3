// @ts-nocheck
import { DATA } from "../portfolio-data";

export function ContactSection({ onCopyEmail }) {
  return (
    <section id="contact" className="reveal">
      <div className="sec-h">
        <span className="n">08</span>
        <h2>Contact</h2>
        <div className="spacer"/>
      </div>
      <div className="contact">
        <div className="lead">Let's build something at scale.</div>
        <div className="prose"><p>Always open to discussing high-scale systems, backend architecture, or AI engineering. Drop a note — I read every one.</p></div>
        <div className="contact-row">
          <div className="email-combo">
            <a className="btn primary email-main" href={"mailto:" + DATA.email}>
              <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
              {DATA.email}
            </a>
            <button className="btn primary email-copy" onClick={onCopyEmail} title="Copy email (⇧C)" aria-label="Copy email address">
              <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>
              <span className="mobile-copy-label">copy</span>
              <span className="k">⇧C</span>
            </button>
          </div>
          <a className="btn" href={DATA.links.github} target="_blank" rel="noreferrer">
            <svg className="ic" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.4 3.6 1 .1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"/></svg>
            github
          </a>
          <a className="btn" href={DATA.links.linkedin} target="_blank" rel="noreferrer">
            <svg className="ic" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1-.02 5.01A2.5 2.5 0 0 1 4.98 3.5zM3 9h4v12H3V9zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21H18v-5.3c0-1.3 0-3-1.8-3S14 14 14 15.6V21h-4V9z"/></svg>
            linkedin
          </a>
          <a className="btn" href={DATA.links.x} target="_blank" rel="noreferrer">
            <svg className="ic" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2H21l-6.52 7.45L22 22h-6.172l-4.833-6.29L5.4 22H2.64l6.98-7.97L2 2h6.32l4.37 5.77L18.244 2zm-1.083 18.01h1.525L7.01 3.88H5.374L17.16 20.01z"/></svg>
            x
          </a>
        </div>
      </div>
    </section>
  );
}
