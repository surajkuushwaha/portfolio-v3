// @ts-nocheck
import { DATA } from "../portfolio-data";
import { HeroTerminal } from "./hero-terminal";
import "@/styles/portfolio/portfolio-hero-section.css";

export function PortfolioHero() {
  return (
    <div className="hero" id="top">
      <HeroTerminal />
      <div className="name-block reveal">
        <div>
          <h1>{DATA.name}</h1>
          <p className="role">
            <b>{DATA.role}</b>
            <span className="sep">·</span>
            Backend Architect
            <span className="sep">·</span>
            Agentic AI
            <span className="sep">·</span>
            {DATA.city}
          </p>
          <div className="status">
            <span className="blip" />
            available for interesting problems
          </div>
        </div>
        <div className="avatar">{DATA.initials}</div>
      </div>
    </div>
  );
}
