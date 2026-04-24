// @ts-nocheck
import * as React from "react";

// Terminal pointer-tracked glow: sets --mx/--my on each .term element
export function useTermPointer() {
  React.useEffect(() => {
    const onMove = (e) => {
      document.querySelectorAll('.term').forEach(el => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left, y = e.clientY - r.top;
        el.style.setProperty('--mx', x + 'px');
        el.style.setProperty('--my', y + 'px');
      });
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);
}
