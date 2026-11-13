import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-bay-nine-59.vercel.app";

const title = "David Jimenez — Junior Full-Stack Developer";
const description =
  "Portfolio de David Jimenez, desarrollador full-stack junior: Python (Flask, FastAPI), JavaScript, React y Next.js, con proyectos y demos en vivo.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | David Jimenez",
  },
  description,
  applicationName: "Portfolio de David Jimenez",
  authors: [{ name: "David Jimenez" }],
  creator: "David Jimenez",
  keywords: [
    "David Jimenez",
    "desarrollador full-stack",
    "junior full-stack developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Python",
    "Flask",
    "FastAPI",
    "portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: title,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
