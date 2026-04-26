// @ts-nocheck
import { DATA } from "../portfolio-data";
import "@/styles/portfolio/portfolio-sections-shared.css";

const SCHOOL_TEXT_STYLE = { fontSize: 14, fontWeight: 500, color: "var(--fg)" };
const DEG_TEXT_STYLE = { marginTop: 2, fontSize: 12, color: "var(--muted)" };
const WHEN_TEXT_STYLE = { fontSize: 12, color: "var(--muted-2)", whiteSpace: "nowrap" };

export function EducationSection() {
  return (
    <section id="education" className="reveal">
      <div className="sec-h">
        <span className="n">07</span>
        <h2>Education</h2>
        <div className="spacer"/>
      </div>
      <div className="flex flex-col gap-[14px]">
        {DATA.education.map((e) => (
          <div className="flex flex-wrap justify-between gap-4 py-1" key={`${e.school}-${e.when}`}>
            <div>
              <div className="font-sans" style={SCHOOL_TEXT_STYLE}>{e.school}</div>
              <div className="font-mono" style={DEG_TEXT_STYLE}>{e.deg}</div>
            </div>
            <div className="font-mono" style={WHEN_TEXT_STYLE}>{e.when}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
