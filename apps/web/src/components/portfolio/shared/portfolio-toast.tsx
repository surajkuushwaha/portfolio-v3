// @ts-nocheck
import "@/styles/portfolio/portfolio-toast.css";

export function PortfolioToast({ toast }) {
  if (!toast) return null;

  return (
    <div className="toast show">
      <span className={toast.ok ? "ok" : ""}>{toast.ok ? "✓" : "✕"}</span>
      {toast.msg}
    </div>
  );
}
