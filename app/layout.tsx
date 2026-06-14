import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { profile, siteConfig } from "@/data/profile";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${profile.name} - ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
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
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.url,
    title: `${profile.name} - ${profile.role}`,
    description: profile.tagline,
    siteName: siteConfig.name,
    images: [
      {
        url: "/headshot-profile.png",
        width: 1200,
        height: 630,
        alt: profile.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} - ${profile.role}`,
    description: profile.tagline,
    creator: "@radityaaria",
    images: ["/headshot-profile.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  description: profile.tagline,
  url: siteConfig.url,
  email: profile.email,
  image: `${siteConfig.url}/headshot-profile.png`,
  sameAs: [
    profile.social.github,
    profile.social.linkedin,
    profile.social.instagram,
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Yogyakarta",
    addressCountry: "ID",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-grow mt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
