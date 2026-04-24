// @ts-nocheck
import * as React from "react";

import {
  TweakRadio,
  TweakSection,
  TweakSelect,
  TweakSlider,
  TweaksPanel,
  useTweaks,
} from "@/components/tweaks-panel";
import "@/styles/portfolio.css";

import { useReveal } from "./hooks/use-reveal";
import { useSystemTheme } from "./hooks/use-system-theme";
import { useTermPointer } from "./hooks/use-term-pointer";
import { ACCENTS, DATA, NAV_ITEMS, SECTION_IDS, TWEAK_DEFAULTS } from "./portfolio-data";
import { AboutSection } from "./sections/about-section";
import { ContactSection } from "./sections/contact-section";
import { EducationSection } from "./sections/education-section";
import { ExperienceSection } from "./sections/experience-section";
import { FooterSection } from "./sections/footer-section";
import { NowSection } from "./sections/now-section";
import { ProjectsSection } from "./sections/projects-section";
import { SkillsSection } from "./sections/skills-section";
import { WritingSection } from "./sections/writing-section";
import { CommandPalette } from "./shared/command-palette";
import { CursorFX } from "./shared/cursor-fx";
import { HeroTerminal } from "./shared/hero-terminal";
import { scrollToSection } from "./shared/scroll-to";
import { ThemeIcon } from "./shared/theme-icon";

function PortfolioPage() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const sys = useSystemTheme();
  const [scrolled, setScrolled] = React.useState(false);
  const [cmdOpen, setCmdOpen] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const [active, setActive] = React.useState('about');

  const effectiveTheme = t.theme === 'auto' ? sys : t.theme;
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', effectiveTheme);
  }, [effectiveTheme]);

  React.useEffect(() => {
    document.documentElement.style.setProperty('--accent', t.accent);
    const map = { plex: "'IBM Plex Sans'", inter: "'Inter'", system: "ui-sans-serif, system-ui", serifDisplay: "'IBM Plex Sans'" };
    document.documentElement.style.setProperty('--sans', `${map[t.font] || "'IBM Plex Sans'"},ui-sans-serif,system-ui,-apple-system,sans-serif`);
  }, [t.accent, t.font]);

  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    h(); window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  React.useEffect(() => {
    const io = new IntersectionObserver(es => {
      es.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    SECTION_IDS.forEach(id => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  useReveal();
  useTermPointer();

  const flash = (msg, ok = true) => {
    setToast({ msg, ok }); setTimeout(() => setToast(null), 1700);
  };
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(DATA.email); flash('Email copied'); }
    catch { flash('Copy failed', false); }
  };
  const toggleTheme = () => {
    const next = effectiveTheme === 'dark' ? 'light' : 'dark';
    setTweak('theme', next);
  };

  React.useEffect(() => {
    let gKey = 0;
    const onKey = (e) => {
      const meta = e.metaKey || e.ctrlKey;
      const tag = (e.target.tagName || '').toLowerCase();
      const typing = tag === 'input' || tag === 'textarea' || e.target.isContentEditable;

      if (meta && e.key.toLowerCase() === 'k') { e.preventDefault(); setCmdOpen(o => !o); return; }
      if (typing) return;

      if (e.key === 'Escape') { setCmdOpen(false); return; }
      if (e.key === '?')      { e.preventDefault(); setCmdOpen(true); return; }

      if (e.key.toLowerCase() === 'g' && !meta) {
        gKey = Date.now();
        return;
      }
      if (gKey && Date.now() - gKey < 1200 && !meta) {
        const map = { a: 'about', s: 'skills', e: 'experience', p: 'projects', n: 'now', w: 'writing', c: 'contact', h: 'top' };
        const target = map[e.key.toLowerCase()];
        if (target) {
          e.preventDefault();
          if (target === 'top') { document.getElementById('top')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
          else scrollToSection(target);
          gKey = 0;
          return;
        }
      }
      if (e.shiftKey && !meta) {
        if (e.key.toLowerCase() === 't') { e.preventDefault(); toggleTheme(); }
        else if (e.key.toLowerCase() === 'c') { e.preventDefault(); copyEmail(); }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [effectiveTheme]);

  return (
    <>
      <CursorFX mode={t.fxMode} size={t.fxSize} intensity={t.fxIntensity} trail={t.fxTrail}/>

      <div className={"app " + (t.density === 'compact' ? 'dense' : '')} data-screen-label="Portfolio">

        <div className={"topbar" + (scrolled ? ' scrolled' : '')}>
          <a href="#top" className="brand">
            {DATA.handle}<span className="dot">_</span>
          </a>
          <nav>
            {NAV_ITEMS.map(([id, label]) => (
              <a key={id} href={"#" + id}
                className={active === id ? 'active' : ''}
                onClick={e => { e.preventDefault(); scrollToSection(id); }}>
                {label}
              </a>
            ))}
            <button className="k" onClick={() => setCmdOpen(true)} title="Command palette">
              <span>⌘K</span>
            </button>
            <button className="icon-btn" onClick={toggleTheme} title="Toggle theme (⇧T)" style={{ marginLeft: 4 }}>
              <ThemeIcon dark={effectiveTheme === 'dark'}/>
            </button>
          </nav>
        </div>

        <div className="hero" id="top">
          <HeroTerminal/>
          <div className="name-block reveal">
            <div>
              <h1>{DATA.name}</h1>
              <p className="role">
                <b>{DATA.role}</b>
                <span className="sep">·</span>Backend Architect
                <span className="sep">·</span>Agentic AI
                <span className="sep">·</span>Bengaluru
              </p>
              <div className="status"><span className="blip"/>available for interesting problems</div>
            </div>
            <div className="avatar">{DATA.initials}</div>
          </div>
        </div>

        <AboutSection/>
        <SkillsSection/>
        <ExperienceSection/>
        <ProjectsSection/>
        <NowSection/>
        <WritingSection/>
        <EducationSection/>
        <ContactSection onCopyEmail={copyEmail}/>

        <FooterSection/>
      </div>

      <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} onTheme={toggleTheme} onCopyEmail={copyEmail}/>

      {toast && (
        <div className={"toast show"}>
          <span className={toast.ok ? 'ok' : ''}>{toast.ok ? '✓' : '✕'}</span>
          {toast.msg}
        </div>
      )}

      <TweaksPanel>
        <TweakSection label="Theme"/>
        <TweakRadio label="Mode" value={t.theme}
          options={[{ label: 'auto', value: 'auto' }, { label: 'light', value: 'light' }, { label: 'dark', value: 'dark' }]}
          onChange={v => setTweak('theme', v)}/>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
          <span style={{ color: 'rgba(41,38,27,.72)', fontWeight: 500 }}>Accent</span>
          <div style={{ display: 'flex', gap: 6 }}>
            {ACCENTS.map(c => (
              <button key={c} onClick={() => setTweak('accent', c)}
                style={{ width: 18, height: 18, borderRadius: 9, background: c, border: t.accent === c ? '2px solid #000' : '1px solid rgba(0,0,0,.15)', cursor: 'pointer', padding: 0 }}
                title={c}/>
            ))}
          </div>
        </div>

        <TweakSection label="Type"/>
        <TweakRadio label="Font" value={t.font}
          options={[{ label: 'plex', value: 'plex' }, { label: 'inter', value: 'inter' }, { label: 'system', value: 'system' }]}
          onChange={v => setTweak('font', v)}/>

        <TweakSection label="Layout"/>
        <TweakRadio label="Density" value={t.density}
          options={[{ label: 'compact', value: 'compact' }, { label: 'regular', value: 'regular' }]}
          onChange={v => setTweak('density', v)}/>

        <TweakSection label="Cursor FX"/>
        <TweakSelect label="Effect" value={t.fxMode}
          options={[
            { label: '✨ Glow',       value: 'glow' },
            { label: '🌈 Aurora',     value: 'aurora' },
            { label: '🔦 Spotlight',  value: 'spotlight' },
            { label: '💧 Trail',      value: 'trail' },
            { label: '✚ Crosshair',  value: 'crosshair' },
            { label: '⚡ Ripple',     value: 'ripple' },
            { label: '🦲 Magnet',     value: 'magnet' },
            { label: '✕ Off',         value: 'off' },
          ]}
          onChange={v => setTweak('fxMode', v)}/>
        <TweakSlider label="Size" value={t.fxSize} min={120} max={1200} step={20}
          onChange={v => setTweak('fxSize', v)}/>
        <TweakSlider label="Intensity" value={t.fxIntensity} min={0} max={1} step={.02}
          onChange={v => setTweak('fxIntensity', v)}/>
        <TweakSlider label="Follow speed" value={t.fxTrail} min={.02} max={.5} step={.01}
          onChange={v => setTweak('fxTrail', v)}/>
      </TweaksPanel>
    </>
  );
}

export default PortfolioPage;
