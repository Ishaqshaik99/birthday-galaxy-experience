import type { Metadata } from "next";
import { Dancing_Script, Inter, Playfair_Display } from "next/font/google";
import { AppProvider } from "@/components/providers/app-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://birthday-galaxy.vercel.app"),
  title: "Happy Birthday | Galaxy Story Experience",
  description:
    "A cinematic premium birthday website blending Apple-grade polish, galaxy ambience, and heartfelt storytelling.",
  applicationName: "Birthday Galaxy Experience",
  keywords: ["birthday website", "next.js birthday", "interactive story", "cinematic landing page"],
  openGraph: {
    title: "Happy Birthday | Galaxy Story Experience",
    description:
      "A premium interactive birthday experience with cinematic storytelling and luxury motion design.",
    images: ["/images/final.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Happy Birthday | Galaxy Story Experience",
    description:
      "A premium interactive birthday experience with cinematic storytelling and luxury motion design.",
    images: ["/images/final.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${dancing.variable} bg-night text-white antialiased`}
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
