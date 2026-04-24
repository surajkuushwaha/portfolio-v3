// @ts-nocheck

export function SkillIcon({ kind }) {
  const p = { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" };
  switch (kind) {
    case "server":  return <svg viewBox="0 0 24 24" {...p}><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/></svg>;
    case "cloud":   return <svg viewBox="0 0 24 24" {...p}><path d="M7 18a5 5 0 0 1 .5-9.97 6 6 0 0 1 11.5 2A4 4 0 0 1 18 18z"/></svg>;
    case "spark":   return <svg viewBox="0 0 24 24" {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg>;
    case "db":      return <svg viewBox="0 0 24 24" {...p}><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/></svg>;
    case "gauge":   return <svg viewBox="0 0 24 24" {...p}><path d="M12 14l4-4"/><path d="M20 12a8 8 0 1 0-13.5 5.8"/><path d="M4 18h16"/></svg>;
    case "browser": return <svg viewBox="0 0 24 24" {...p}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/></svg>;
    default:        return <svg viewBox="0 0 24 24" {...p}><circle cx="12" cy="12" r="8"/></svg>;
  }
}

export function StatIcon({ kind }) {
  const p = { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" };
  switch (kind) {
    case "pulse":    return <svg viewBox="0 0 24 24" {...p}><path d="M3 12h4l2-6 4 12 2-6h6"/></svg>;
    case "brands":   return <svg viewBox="0 0 24 24" {...p}><path d="M3 21V9l9-6 9 6v12"/><path d="M9 21v-6h6v6"/><path d="M3 21h18"/></svg>;
    case "shield":   return <svg viewBox="0 0 24 24" {...p}><path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z"/><path d="m9 12 2 2 4-4"/></svg>;
    case "calendar": return <svg viewBox="0 0 24 24" {...p}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>;
    case "trend":    return <svg viewBox="0 0 24 24" {...p}><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>;
    default:         return <svg viewBox="0 0 24 24" {...p}><circle cx="12" cy="12" r="8"/></svg>;
  }
}
