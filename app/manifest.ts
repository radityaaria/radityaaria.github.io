import { MetadataRoute } from "next";
import { siteConfig } from "@/data/profile";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: "Automation QA Engineer portfolio specializing in Cypress, Playwright, and Grafana k6.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0891b2",
  };
}
