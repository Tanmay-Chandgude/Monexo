import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-lex-serif",
  weight: ['400', '700'],
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Monexo",
  description: "Monexo is a simple & safe banking platform for Everyone",
  icons: '/icons/logo.svg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable} `}
      >
        {children}
      </body>
    </html>
  );
}
