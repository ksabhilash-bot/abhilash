import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Abhilash K S | Full-Stack & Backend Engineer",
  description:
    "Digital Editorial Developer Portfolio of Abhilash K S. Specializing in scalable full-stack applications with high-end editorial aesthetics and robust performance (React/Next.js, FastAPI, Express, Docker, and Redis caching).",
  keywords: [
    "Abhilash K S",
    "Full-Stack Developer",
    "Backend Engineer",
    "FastAPI",
    "Express",
    "Docker",
    "Redis Caching",
    "Next.js",
    "React",
    "PostgreSQL",
    "System Design",
    "Software Craftsmanship",
  ],
  metadataBase: new URL("https://abhilash-psi.vercel.app/"),
  openGraph: {
    title: "Abhilash K S | Full-Stack Developer",
    description:
      "Portfolio showcasing full-stack and backend engineering projects.",
    url: "https://abhilash-psi.vercel.app/",
    siteName: "Abhilash K S Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhilash K S | Full-Stack Developer",
    description:
      "Portfolio showcasing scalable web applications and backend systems.",
    images: ["/og-image.png"],
  },
  authors: [{ name: "Abhilash K S" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F8F6F2] text-[#111111] overflow-x-hidden relative selection:bg-[#2563EB] selection:text-white">
        {children}
      </body>
    </html>
  );
}
