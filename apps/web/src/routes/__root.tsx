import { Toaster } from "@portfolio-v2/ui/components/sonner";
import { HeadContent, Outlet, Scripts, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import appCss from "../index.css?url";

export type RouterAppContext = Record<string, never>;

export const Route = createRootRouteWithContext<RouterAppContext>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Suraj Kushwaha — SDE II",
      },
      {
        name: "description",
        content:
          "Suraj Kushwaha is an SDE II and backend architect building multi-tenant SaaS, event-driven systems, and agentic AI workflows at production scale.",
      },
      {
        name: "author",
        content: "Suraj Kushwaha",
      },
      {
        name: "robots",
        content: "index, follow",
      },
      {
        property: "og:title",
        content: "Suraj Kushwaha — Backend Architect",
      },
      {
        property: "og:description",
        content:
          "SDE II with 4+ years building backend systems handling 50M+ weekly requests for 200+ brands.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://www.surajkuushwaha.com",
      },
      {
        property: "og:site_name",
        content: "Suraj Kushwaha",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "twitter:title",
        content: "Suraj Kushwaha — Backend Architect",
      },
      {
        name: "twitter:description",
        content:
          "SDE II building multi-tenant SaaS, event-driven systems, and agentic AI workflows.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "canonical",
        href: "https://www.surajkuushwaha.com",
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
      },
    ],
  }),

  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Toaster richColors />
        {import.meta.env.DEV && <TanStackRouterDevtools position="bottom-left" />}
        <Scripts />
      </body>
    </html>
  );
}
