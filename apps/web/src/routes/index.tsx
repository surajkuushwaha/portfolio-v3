import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  useEffect(() => {
    window.location.replace("/portfolio.html");
  }, []);

  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <p className="text-muted-foreground text-sm">Loading portfolio...</p>
    </div>
  );
}
