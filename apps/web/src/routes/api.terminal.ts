import { createFileRoute } from "@tanstack/react-router";

const esc = "\x1b[";
const reset = `${esc}0m`;
const bold = `${esc}1m`;
const green = `${esc}32m`;
const gray = `${esc}90m`;

const paint = (value: string, color: string) => `${color}${value}${reset}`;
const prompt = () => `${green}->${reset} ${gray}~${reset}`;

const terminalProfile = String.raw`
${prompt()} whoami
${paint("suraj kushwaha", bold)} · sde ii · backend architect

${prompt()} stack
node.js · typescript · go · aws · mysql · postgres · langgraph

${prompt()} contact
work@surajkuushwaha.com · github.com/surajkuushwaha · linkedin.com/in/surajkuushwaha
`.trimStart();

export const Route = createFileRoute("/api/terminal")({
  server: {
    handlers: {
      GET: async () =>
        new Response(`${terminalProfile}\n`, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
            "X-Content-Type-Options": "nosniff",
          },
        }),
    },
  },
});
