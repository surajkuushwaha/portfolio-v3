// @ts-nocheck
import * as React from "react";

export function useSystemTheme() {
  const [sys, setSys] = React.useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  React.useEffect(() => {
    const m = window.matchMedia('(prefers-color-scheme: dark)');
    const h = (e) => setSys(e.matches ? 'dark' : 'light');
    m.addEventListener('change', h);
    return () => m.removeEventListener('change', h);
  }, []);
  return sys;
}
