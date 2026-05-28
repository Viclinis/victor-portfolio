import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Victor Tique | Software Architect & Mobile Developer",

  description:
    "Software Engineer and MSc in ICT specialized in mobile development, scalable architectures, web platforms and AI-powered solutions.",

  keywords: [
    "Software Engineer",
    "Mobile Developer",
    "Flutter Developer",
    "React Developer",
    "Next.js",
    "Software Architect",
    "AI Solutions",
    "Full Stack Developer",
    "Spring Boot",
    "Kotlin",
    "Swift",
  ],

  authors: [{ name: "Victor Tique" }],

  creator: "Victor Tique",

  openGraph: {
    title: "Victor Tique | Software Architect",
    description:
      "Premium software engineer portfolio focused on scalable digital experiences.",
    url: "https://victortique.dev",
    siteName: "Victor Tique Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Victor Tique | Software Architect",
    description:
      "Premium software engineer portfolio focused on scalable digital experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}