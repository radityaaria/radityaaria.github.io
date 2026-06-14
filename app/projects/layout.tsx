import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "QA automation frameworks, performance testing suites, and web applications built with Cypress, Playwright, Katalon Studio, and Grafana k6.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
