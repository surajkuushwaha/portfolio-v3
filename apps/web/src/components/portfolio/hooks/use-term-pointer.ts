// @ts-nocheck
import * as React from "react";

// Terminal pointer-tracked glow: sets --mx/--my on each .term element
export function useTermPointer() {
  React.useEffect(() => {
    const terms = Array.from(document.querySelectorAll('.term'));
    if (!terms.length) return;

    const onMove = (e) => {
      const el = e.currentTarget;
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      el.style.setProperty('--mx', x + 'px');
      el.style.setProperty('--my', y + 'px');
    };

    terms.forEach(el => el.addEventListener('pointermove', onMove, { passive: true }));
    return () => terms.forEach(el => el.removeEventListener('pointermove', onMove));
  }, []);
}
