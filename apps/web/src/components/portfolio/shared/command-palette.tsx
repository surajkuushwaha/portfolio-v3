// @ts-nocheck
import * as React from "react";
import "@/styles/portfolio/command-palette.css";

import { DATA } from "../portfolio-data";
import { scrollToSection } from "./scroll-to";

export function CommandPalette({ open, onClose, onTheme, onCopyEmail }) {
  const [q, setQ] = React.useState('');
  const [idx, setIdx] = React.useState(0);
  const inputRef = React.useRef(null);

  const items = React.useMemo(() => [
    { group: 'Navigate', label: 'Go to About',      hint: 'g a', act: () => scrollToSection('about') },
    { group: 'Navigate', label: 'Go to Skills',     hint: 'g s', act: () => scrollToSection('skills') },
    { group: 'Navigate', label: 'Go to Experience', hint: 'g e', act: () => scrollToSection('experience') },
    { group: 'Navigate', label: 'Go to Projects',   hint: 'g p', act: () => scrollToSection('projects') },
    { group: 'Navigate', label: 'Go to Now',        hint: 'g n', act: () => scrollToSection('now') },
    { group: 'Navigate', label: 'Go to Contact',    hint: 'g c', act: () => scrollToSection('contact') },
    { group: 'Actions',  label: 'Toggle theme',          hint: '⇧ T', act: onTheme },
    { group: 'Actions',  label: 'Copy email',            hint: '⇧ C', act: onCopyEmail },
    { group: 'Actions',  label: 'View source on GitHub', hint: '↗',   act: () => window.open(DATA.links.github, '_blank') },
    { group: 'Links',    label: 'GitHub',   hint: '↗', act: () => window.open(DATA.links.github, '_blank') },
    { group: 'Links',    label: 'LinkedIn', hint: '↗', act: () => window.open(DATA.links.linkedin, '_blank') },
    { group: 'Links',    label: 'X',        hint: '↗', act: () => window.open(DATA.links.x, '_blank') },
    { group: 'Links',    label: 'Email',    hint: '↗', act: () => { location.href = 'mailto:' + DATA.email; } },
  ], [onTheme, onCopyEmail]);

  const filtered = React.useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return items;
    return items.filter(i => i.label.toLowerCase().includes(s) || i.group.toLowerCase().includes(s));
  }, [q, items]);

  React.useEffect(() => {
    if (open) { setQ(''); setIdx(0); setTimeout(() => inputRef.current?.focus(), 20); }
  }, [open]);

  React.useEffect(() => { setIdx(0); }, [q]);

  const doAct = (i) => { filtered[i]?.act(); onClose(); };

  if (!open) return null;

  const groups = {};
  filtered.forEach(it => { (groups[it.group] = groups[it.group] || []).push(it); });
  const flat = filtered;

  return (
    <div className="cmdk-veil" onMouseDown={onClose}>
      <div className="cmdk" onMouseDown={e => e.stopPropagation()}>
        <input
          ref={inputRef} value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Type a command or search…"
          onKeyDown={e => {
            if (e.key === 'Escape') onClose();
            else if (e.key === 'ArrowDown') { e.preventDefault(); setIdx(i => Math.min(i + 1, flat.length - 1)); }
            else if (e.key === 'ArrowUp')   { e.preventDefault(); setIdx(i => Math.max(i - 1, 0)); }
            else if (e.key === 'Enter')     { e.preventDefault(); doAct(idx); }
          }}
        />
        <div className="cmdk-list">
          {Object.entries(groups).map(([g, its]) => (
            <div className="cmdk-group" key={g}>
              <div className="cmdk-group-h">{g}</div>
              {its.map(it => {
                const fi = flat.indexOf(it);
                return (
                  <div key={it.label}
                    className={"cmdk-item" + (fi === idx ? ' active' : '')}
                    onMouseEnter={() => setIdx(fi)}
                    onClick={() => doAct(fi)}>
                    <span className="ic">›</span>
                    <span>{it.label}</span>
                    <span className="hint">{it.hint}</span>
                  </div>
                );
              })}
            </div>
          ))}
          {flat.length === 0 && <div style={{ padding: '18px 12px', fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--muted)' }}>No results.</div>}
        </div>
        <div className="cmdk-foot">
          <span><kbd>↑</kbd><kbd>↓</kbd> navigate <kbd>↵</kbd> select</span>
          <span><kbd>esc</kbd> close</span>
        </div>
      </div>
    </div>
  );
}
