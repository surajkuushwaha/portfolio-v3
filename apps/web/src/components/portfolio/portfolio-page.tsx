// @ts-nocheck
import * as React from "react";

import "@/styles/portfolio/portfolio-page.css";

import { useReveal } from "./hooks/use-reveal";
import { useSystemTheme } from "./hooks/use-system-theme";
import { useTermPointer } from "./hooks/use-term-pointer";
import { DATA, SECTION_IDS, TWEAK_DEFAULTS } from "./portfolio-data";
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
import { PortfolioHero } from "./shared/portfolio-hero";
import { PortfolioToast } from "./shared/portfolio-toast";
import { PortfolioTopBar } from "./shared/portfolio-top-bar";
import { scrollToSection } from "./shared/scroll-to";

function PortfolioPage() {
  const [t, setTweaks] = React.useState(TWEAK_DEFAULTS);
  const setTweak = React.useCallback((key, value) => {
    setTweaks(prev => ({ ...prev, [key]: value }));
  }, []);
  const sys = useSystemTheme();
  const [scrolled, setScrolled] = React.useState(false);
  const [cmdOpen, setCmdOpen] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const [active, setActive] = React.useState('about');
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

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
    let raf = 0;
    let last = window.scrollY > 20;
    setScrolled(last);
    const h = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const next = window.scrollY > 20;
        if (next !== last) {
          last = next;
          setScrolled(next);
        }
      });
    };
    window.addEventListener('scroll', h, { passive: true });
    return () => {
      window.removeEventListener('scroll', h);
      cancelAnimationFrame(raf);
    };
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

      if (e.key === 'Escape') { setCmdOpen(false); setMobileNavOpen(false); return; }
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
          if (target === 'top') {
            const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
            document.getElementById('top')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
          }
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

  React.useEffect(() => {
    if (!mobileNavOpen) return;
    const onPointerDown = (e) => {
      if (!e.target.closest?.('.topbar')) setMobileNavOpen(false);
    };
    window.addEventListener('pointerdown', onPointerDown);
    return () => window.removeEventListener('pointerdown', onPointerDown);
  }, [mobileNavOpen]);

  return (
    <>
      <CursorFX mode={t.fxMode} size={t.fxSize} intensity={t.fxIntensity} trail={t.fxTrail}/>

      <div className={t.density === "compact" ? "app dense" : "app"} data-screen-label="Portfolio">
        <PortfolioTopBar
          scrolled={scrolled}
          activeSection={active}
          isMobileNavOpen={mobileNavOpen}
          isDark={effectiveTheme === "dark"}
          onOpenCommandPalette={() => setCmdOpen(true)}
          onToggleTheme={toggleTheme}
          onToggleMobileNav={() => setMobileNavOpen(open => !open)}
          onCloseMobileNav={() => setMobileNavOpen(false)}
        />

        <PortfolioHero />

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
      <PortfolioToast toast={toast}/>

    </>
  );
}

export default PortfolioPage;
