// @ts-nocheck
import { DATA } from "../portfolio-data";

const KBD_STYLE = {
  fontFamily: 'var(--mono)',
  background: 'var(--hover)',
  padding: '1px 5px',
  borderRadius: 3,
  border: '1px solid var(--line)',
};

export function FooterSection() {
  return (
    <footer>
      <span>© {new Date().getFullYear()} {DATA.name}. built in html.</span>
      <span className="footer-shortcuts">
        press <kbd style={KBD_STYLE}>⌘K</kbd> or <kbd style={KBD_STYLE}>?</kbd> anywhere
      </span>
      <span className="footer-mobile-hint">tap menu to navigate</span>
    </footer>
  );
}
