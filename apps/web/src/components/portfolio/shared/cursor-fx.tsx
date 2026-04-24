// @ts-nocheck
import * as React from "react";

// Cursor FX — multi-mode pointer overlay. Each mode renders its own
// layer; the effect driver updates CSS vars / transforms per frame.
export function CursorFX({ mode = 'glow', size = 520, intensity = .22, trail = .12 }) {
  const rootRef = React.useRef(null);
  const glowRef = React.useRef(null);
  const auroraRef = React.useRef(null);
  const spotRef = React.useRef(null);
  const crossRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const [ripples, setRipples] = React.useState([]);
  const trailCount = 12;
  const trailRefs = React.useRef([]);

  React.useEffect(() => {
    const r = rootRef.current; if (!r) return;
    r.style.setProperty('--fx-size', size + 'px');
    r.style.setProperty('--fx-intensity', intensity);
    r.style.setProperty('--fx-trail', trail);
  }, [size, intensity, trail]);

  React.useEffect(() => {
    if (mode === 'off') return;
    if (window.matchMedia?.('(pointer: coarse), (prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    let idleTimer = 0;
    let x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y;
    const history = Array.from({ length: trailCount }, () => ({ x, y }));

    const start = () => {
      if (!raf) raf = requestAnimationFrame(tick);
      clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        cancelAnimationFrame(raf);
        raf = 0;
      }, 180);
    };
    const onMove = e => {
      tx = e.clientX;
      ty = e.clientY;
      start();
    };
    const onClick = e => {
      if (mode !== 'ripple') return;
      const id = Math.random().toString(36).slice(2);
      setRipples(rs => [...rs, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setRipples(rs => rs.filter(r => r.id !== id)), 900);
    };

    const tick = () => {
      const ease = Math.max(.02, Math.min(.5, trail));
      x += (tx - x) * ease; y += (ty - y) * ease;

      if (mode === 'glow' && glowRef.current) {
        glowRef.current.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
      }
      if (mode === 'aurora' && auroraRef.current) {
        auroraRef.current.style.left = x + 'px';
        auroraRef.current.style.top = y + 'px';
      }
      if (mode === 'spotlight' && spotRef.current) {
        spotRef.current.style.setProperty('--fx-x', x + 'px');
        spotRef.current.style.setProperty('--fx-y', y + 'px');
      }
      if (mode === 'crosshair' && crossRef.current) {
        crossRef.current.style.setProperty('--fx-x', x + 'px');
        crossRef.current.style.setProperty('--fx-y', y + 'px');
      }
      if (mode === 'trail') {
        history.unshift({ x, y });
        history.length = trailCount;
        trailRefs.current.forEach((el, i) => {
          if (!el) return;
          const p = history[i] || { x, y };
          const o = (1 - i / trailCount) * 0.9;
          const s = 1 - (i / trailCount) * 0.7;
          el.style.transform = `translate(${p.x}px,${p.y}px) translate(-50%,-50%) scale(${s})`;
          el.style.setProperty('--o', o);
        });
      }
      if (mode === 'magnet' && canvasRef.current) {
        drawMagnet(canvasRef.current, x, y, intensity);
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onClick, { passive: true });

    let onResize = null;
    if (mode === 'magnet' && canvasRef.current) {
      const c = canvasRef.current;
      onResize = () => {
        c.width = innerWidth * devicePixelRatio;
        c.height = innerHeight * devicePixelRatio;
        c.style.width = innerWidth + 'px';
        c.style.height = innerHeight + 'px';
      };
      onResize();
      window.addEventListener('resize', onResize);
    }

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onClick);
      if (onResize) window.removeEventListener('resize', onResize);
      clearTimeout(idleTimer);
      cancelAnimationFrame(raf);
    };
  }, [mode, trail, intensity]);

  if (mode === 'off') return null;

  return (
    <div ref={rootRef} className="fx-root" aria-hidden="true">
      {mode === 'glow' && <div ref={glowRef} className="cursor-glow"/>}
      {mode === 'aurora' && <div ref={auroraRef} className="cursor-aurora"/>}
      {mode === 'spotlight' && <div ref={spotRef} className="cursor-spot"/>}
      {mode === 'crosshair' && <div ref={crossRef} className="cursor-crosshair"/>}
      {mode === 'trail' && Array.from({ length: trailCount }).map((_, i) => (
        <div key={i} ref={el => trailRefs.current[i] = el} className="cursor-trail-dot"/>
      ))}
      {mode === 'magnet' && <canvas ref={canvasRef} className="cursor-magnet-canvas"/>}
      {mode === 'ripple' && <>
        <div ref={glowRef} className="cursor-glow"/>
        {ripples.map(r => (
          <div key={r.id} className="cursor-ripple" style={{ left: r.x + 'px', top: r.y + 'px' }}/>
        ))}
      </>}
    </div>
  );
}

// Magnet field — static grid whose dots are tugged toward the cursor
// within a radius. Cached between frames via the point array.
const magnetField = (() => {
  let pts = null;
  function ensure(w, h) {
    if (pts && pts._w === w && pts._h === h) return pts;
    const gap = 64 * devicePixelRatio;
    const out = [];
    for (let y = gap / 2; y < h; y += gap) {
      for (let x = gap / 2; x < w; x += gap) {
        out.push({ x, y, bx: x, by: y });
      }
    }
    out._w = w; out._h = h;
    return pts = out;
  }
  return { ensure };
})();

function drawMagnet(canvas, mx, my, intensity) {
  const ctx = canvas.getContext('2d');
  const w = canvas.width, h = canvas.height, dpr = devicePixelRatio;
  ctx.clearRect(0, 0, w, h);
  const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#0070f3';
  ctx.fillStyle = accent;
  const pts = magnetField.ensure(w, h);
  const mxp = mx * dpr, myp = my * dpr;
  const R = 200 * dpr;
  for (const p of pts) {
    const dx = mxp - p.bx, dy = myp - p.by;
    const d = Math.hypot(dx, dy);
    const pull = d < R ? (1 - d / R) * 24 * dpr * (0.5 + intensity) : 0;
    const ux = d ? dx / d : 0, uy = d ? dy / d : 0;
    p.x = p.bx + ux * pull;
    p.y = p.by + uy * pull;
    const alpha = d < R ? 0.2 + (1 - d / R) * 0.8 : 0.15;
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 1.5 * dpr, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}
