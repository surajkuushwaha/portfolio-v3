// @ts-nocheck
import { DATA } from "../portfolio-data";
import "@/styles/portfolio/portfolio-sections-shared.css";
import "@/styles/portfolio/portfolio-education.css";

export function EducationSection() {
  return (
    <section id="education" className="reveal">
      <div className="sec-h">
        <span className="n">07</span>
        <h2>Education</h2>
        <div className="spacer"/>
      </div>
      <div className="edu">
        {DATA.education.map((e, i) => (
          <div className="edu-item" key={i}>
            <div>
              <div className="school">{e.school}</div>
              <div className="deg">{e.deg}</div>
            </div>
            <div className="when">{e.when}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
