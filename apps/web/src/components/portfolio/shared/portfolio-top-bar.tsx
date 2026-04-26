// @ts-nocheck
import { DATA, NAV_ITEMS } from "../portfolio-data";
import { scrollToSection } from "./scroll-to";
import { ThemeIcon } from "./theme-icon";
import "@/styles/portfolio/portfolio-top-bar.css";

export function PortfolioTopBar({
  scrolled,
  activeSection,
  isMobileNavOpen,
  isDark,
  onOpenCommandPalette,
  onToggleTheme,
  onToggleMobileNav,
  onCloseMobileNav,
}) {
  return (
    <div className={scrolled ? "scrolled topbar" : "topbar"}>
      <a href="#top" className="brand">
        {DATA.handle}
        <span className="dot">_</span>
      </a>
      <nav>
        <div className="desktop-nav">
          {NAV_ITEMS.map(([id, label]) => (
            <a
              key={id}
              href={"#" + id}
              className={activeSection === id ? "active" : ""}
              onClick={e => {
                e.preventDefault();
                scrollToSection(id);
              }}
            >
              {label}
            </a>
          ))}
        </div>
        <button
          className="k"
          type="button"
          onClick={() => {
            onOpenCommandPalette();
            onCloseMobileNav();
          }}
          title="Command palette"
        >
          <span>⌘K</span>
        </button>
        <button
          className="icon-btn"
          type="button"
          onClick={onToggleTheme}
          title="Toggle theme (⇧T)"
          style={{ marginLeft: 4 }}
        >
          <ThemeIcon dark={isDark} />
        </button>
        <button
          className="mobile-menu-btn"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isMobileNavOpen}
          onClick={onToggleMobileNav}
        >
          <span />
          <span />
        </button>
      </nav>
      {isMobileNavOpen && (
        <div className="mobile-nav" role="menu">
          {NAV_ITEMS.map(([id, label]) => (
            <a
              key={id}
              href={"#" + id}
              role="menuitem"
              className={activeSection === id ? "active" : ""}
              onClick={e => {
                e.preventDefault();
                onCloseMobileNav();
                scrollToSection(id);
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
