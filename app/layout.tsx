import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `${profile.name} - ${profile.role}`,
  description: profile.tagline,
  keywords: [
    "Automation QA Engineer",
    "QA Engineer",
    "Cypress E2E Testing",
    "Grafana k6",
    "Performance Testing",
    "Load Testing",
    "Test Automation",
    "React.js",
    "Next.js",
    "JavaScript",
    "Root Cause Analysis",
    "ISO 9001",
    "Quality Assurance",
    "Yogyakarta",
  ],
  authors: [{ name: profile.name, url: profile.social.github }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://radityaaria.com",
    title: `${profile.name} - ${profile.role}`,
    description: profile.tagline,
    siteName: `${profile.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} - ${profile.role}`,
    description: profile.tagline,
    creator: "@radityaaria",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-grow mt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
