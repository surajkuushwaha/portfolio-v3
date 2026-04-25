// @ts-nocheck
import * as React from "react";

// Hero terminal: types lines with dev-oriented CLI on the left and a
// plain-English gloss on the right. Toggle collapses the gloss column.
export function HeroTerminal() {
  const [terminalHost, setTerminalHost] = React.useState("surajkuushwaha.com");
  const [isReady, setIsReady] = React.useState(false);
  React.useEffect(() => {
    setTerminalHost(window.location.host);
    setIsReady(true);
  }, []);

  const lines = React.useMemo(() => [
    { cmd: `curl -sL ${terminalHost}/api/terminal`, gloss: 'cli version' },
    { out: <><span className="val">terminal profile ready</span> — try it from your shell</> },
    { cmd: 'cat impact.txt', gloss: 'production footprint' },
    { out: <><span className="val">50M+ requests / week</span> · <span className="val">200+ brands</span> · <span className="val">0 downtime</span> migrations</> },
    { cmd: 'whoami', gloss: 'who am I' },
    { out: <><span className="val">suraj kushwaha</span> — sde ii, backend architect, 4+ yrs</> },
    { cmd: 'cat focus.txt', gloss: 'what I build' },
    { out: <>multi-tenant backend systems · event pipelines · <span className="val">agentic AI</span> workflows</> },
    { cmd: 'open /portfolio', gloss: 'scroll to read more ↓' },
  ], [terminalHost]);
  const [step, setStep]   = React.useState(0);
  const [typed, setTyped] = React.useState('');
  const [done, setDone]   = React.useState(false);
  const [closeBlocked, setCloseBlocked] = React.useState(false);

  React.useEffect(() => {
    if (!isReady) return;
    if (step >= lines.length) { setDone(true); return; }
    const ln = lines[step];
    if (ln.cmd === undefined) {
      const t = setTimeout(() => { setStep(s => s + 1); setTyped(''); }, 280);
      return () => clearTimeout(t);
    }
    if (typed.length < ln.cmd.length) {
      const t = setTimeout(() => setTyped(ln.cmd.slice(0, typed.length + 1)), 28 + Math.random() * 40);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => { setStep(s => s + 1); setTyped(''); }, 320);
    return () => clearTimeout(t);
  }, [isReady, step, typed, lines]);

  const closeTab = () => {
    setCloseBlocked(false);
    window.close();

    window.setTimeout(() => {
      setCloseBlocked(true);
    }, 120);
  };

  return (
    <div className="term">
      <div className="gloss" aria-hidden="true"/>
      <div className="noise" aria-hidden="true"/>
      <div className="term-head">
        <div className="dots">
          <button type="button" onClick={closeTab} aria-label="Close tab" title="Close tab"/>
          <span/>
          <span/>
        </div>
        <span className="ttl">~/suraj — zsh</span>
        <span className="term-mode"><span className="sw"/>terminal</span>
      </div>
      <div className="term-body term-body-pad">
        {lines.slice(0, step).map((ln, i) => (
          <div className="term-row" key={ln.cmd ?? `out-${i}`}>
            <div>
              {ln.cmd !== undefined
                ? <><span className="prompt">{'$ '}</span><span className="cmd">{ln.cmd}</span></>
                : <span className="dim">{ln.out}</span>}
            </div>
            {ln.gloss && <div className="gloss">{ln.gloss}</div>}
          </div>
        ))}
        {step < lines.length && lines[step].cmd !== undefined && (
          <div className="term-row">
            <div>
              <span className="prompt">{'$ '}</span>
              <span className="cmd">{typed}</span>
              <span className="cursor" />
            </div>
            <div className="gloss">{lines[step].gloss}</div>
          </div>
        )}
        {done && (
          <div className="term-row">
            <div>
              <span className="prompt">{'$ '}</span>
              <span className="cursor" />
            </div>
          </div>
        )}
        {closeBlocked && (
          <div className="term-row">
            <div>
              <span className="prompt">{'$ '}</span>
              <span className="cmd">close tab</span>
              <br/>
              <span className="dim">permission denied: browser blocked window.close()</span>
            </div>
            <div className="gloss">nice try</div>
          </div>
        )}
      </div>
    </div>
  );
}
